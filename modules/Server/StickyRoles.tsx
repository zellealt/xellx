import React, { Component, useState } from "react";
import discordGuild from "@/interfaces/discordGuild";
import { useSession } from "next-auth/client";
import StickyRolesShimmer from "@/shimmeredModules/Server/StickyRoles";
import SnackBar from "@/modules/Layout/SnackBar";
import Chip from "@/original/Forms/Chip";
import CircleChip from "@/original/Forms/IconChip";
import CustomSelect from "@/original/Forms/CustomSelect";
import AddIcon from "@material-ui/icons/AddRounded";
import make_request from "@/lib/make_request";

const withSession = (Component: any) => (props: any) => {
  const [session, loading] = useSession();

  // if the component has a render property, we are good
  if (Component.prototype.render) {
    return <Component session={session} loading={loading} {...props} />;
  }

  // if the passed component is a function component, there is no need for this wrapper
  throw new Error(
    [
      "You passed a function component, `withSession` is not needed.",
      "You can `useSession` directly in your component.",
    ].join("\n")
  );
};

interface StickyRolesProps {
  guild: discordGuild;
  session: any;
  loading: any;
}

function timeout(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

class StickyRoles extends React.Component<
  StickyRolesProps,
  {
    selected: any;
    alert: string | boolean;
    alertStatus: string | null;
    alertBool: boolean;
    alertCustomClasses: string;
    rateLimited: boolean;
    dropDown: boolean;
    triggerUpdate: boolean;
  }
> {
  constructor(props: any) {
    super(props);

    this.state = {
      selected: false,
      alert: false,
      alertStatus: null,
      alertBool: false,
      alertCustomClasses: "",
      rateLimited: true,
      dropDown: false,
      triggerUpdate: true,
    };

    this.addRole = this.addRole.bind(this);
    this.removeRole = this.removeRole.bind(this);
  }

  componentWillUnmount() {
    if (this.state.selected === false) {
      return;
    }
    window.sessionStorage.setItem(
      "sticky_roles",
      JSON.stringify(this.state.selected)
    );
  }

  async componentDidMount() {
    const { session, loading } = this.props;
    let roleIds = [];
    const item = window.sessionStorage.getItem("sticky_roles");
    if (item === null) {
      for (const role in this.props.guild.roles) {
        roleIds.push(this.props.guild.roles[role]);
      }

      const includes = roleIds.filter((x: any) =>
        this.props.guild.config.sticky_roles.includes(x.id)
      );

      const filteredRoles = includes.filter((x) => {
        return x.id !== 0;
      });

      this.setState({
        selected: filteredRoles,
        alert: false,
        rateLimited: false,
      });

      return;
    }

    this.setState({
      selected: JSON.parse(item),
      alert: false,
      rateLimited: false,
    });
  }

  async componentDidUpdate(prevProps: any, prevState: any) {
    if (this.state.triggerUpdate === false) {
      return this.setState({
        triggerUpdate: true,
      });
    }
    if (prevState.selected !== this.state.selected) {
      this.setState({
        alertStatus: "",
      });
      if (this.state.alertStatus !== null) {
        const { session, loading } = this.props;

        const removed = prevState.selected.filter(
          (x: any) => !this.state.selected.includes(x)
        );

        const added = this.state.selected.filter(
          (x: any) => !prevState.selected.includes(x)
        );

        let api;
        let role_id;

        if (removed.length !== 0) {
          api = "remove";
          role_id = removed[0].id;
        }
        if (added.length !== 0) {
          api = "add";
          role_id = added[0].id;
        }

        this.setState({
          alert: "Applying the changes",
          alertStatus: "blue",
          alertBool: true,
          alertCustomClasses: "animate-pulse",
        });

        const jsonRes = await make_request(
          `
          http://localhost:4000/api/${this.props.guild.id}/${api}/sticky_role?data=${role_id}
        `,
          {
            Authorization: session.user.accessToken,
          }
        );
        if (jsonRes.status === "red") {
          this.setState({
            selected: prevState.selected,
            triggerUpdate: false,
          });
        }
        this.setState({
          alert: jsonRes.message,
          alertStatus: jsonRes.status,
          alertBool: true,
          alertCustomClasses: "",
        });

        await timeout(4000);

        this.setState({
          alertBool: false,
        });
      }
    }
  }

  static getDerivedStateFromProps(props: StickyRolesProps, state: any) {
    let originalRoles;
    if (sessionStorage.getItem("original_roles") === null) {
      sessionStorage.setItem(
        "original_roles",
        JSON.stringify(props.guild.roles)
      );

      originalRoles = props.guild.roles;
    } else {
      originalRoles = JSON.parse(sessionStorage.getItem("original_roles")!);
    }

    if (state.selected !== false) {
      originalRoles = props.guild.roles;
    }

    function removeManaged(entry: { managed: boolean }) {
      return !entry.managed;
    }

    const filteredManaged: any = originalRoles.filter(removeManaged);

    const excluded_roles: any = JSON.parse(
      window.sessionStorage.getItem("sticky_roles")!
    );

    let roles = [];
    for (let role of filteredManaged) {
      if (role["id"] !== 0) {
        role["name"] = role["name"];
      }

      const foundIds = excluded_roles?.filter(
        (x: any) => role["id"].indexOf(x.id) !== -1
      );
      if (foundIds !== undefined) {
        if (foundIds.length === 0) {
          roles.push(role);
        }
      } else {
        roles.push(role);
      }
    }

    props.guild.roles = roles;

    return props;
  }

  addRole(state: any) {
    this.setState((prevState, props) => ({
      selected: [...prevState.selected, state],
    }));
  }

  removeRole(state: any) {
    let filteredArray = this.state.selected.filter(
      (role: any) => role !== state
    );
    this.setState({
      selected: filteredArray,
    });
  }

  getRoles() {
    const filteredArray = this.props.guild.roles.filter((x) => {
      return this.state.selected.indexOf(x) < 0;
    });

    const filteredRoles = filteredArray.filter((x) => {
      return x.id !== 0;
    });

    return filteredRoles;
  }

  render() {
    return this.state.selected ? (
      <div className="z-50">
        <CustomSelect
          setSelected={this.addRole}
          name="Sticky Roles"
          data={this.getRoles()}
          custom={
            <CircleChip
              icon={<AddIcon />}
              classes="relative top-1"
              name="add"
            />
          }
          content={this.state.selected.map((role: any) => {
            let nonRemovable;
            if (role.id === 0) nonRemovable = true;
            else nonRemovable = false;
            return (
              <Chip
                key={role.id}
                remove={() => this.removeRole(role)}
                intColor={role.color}
                text={role.name}
                name="discordId"
                nonRemovable={nonRemovable}
              />
            );
          })}
        />
        <br />
        <SnackBar
          customClasses={this.state.alertCustomClasses}
          alert={this.state.alert}
          alertBool={this.state.alertBool}
          alertStatus={this.state.alertStatus}
        />
      </div>
    ) : (
      <StickyRolesShimmer />
    );
  }
}

const ClassComponentWithSession = withSession(StickyRoles);

export default ClassComponentWithSession;
