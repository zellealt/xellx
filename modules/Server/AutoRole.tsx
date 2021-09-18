import React, { Component, useState } from "react";
import discordGuild from "@/interfaces/discordGuild";
import Select from "@/original/Forms/Select";
import { useSession } from "next-auth/client";
import AutoRoleShimmer from "@/shimmeredModules/Server/AutoRole";
import SnackBar from "@/modules/Layout/SnackBar";
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

interface AutoRoleProps {
  guild: discordGuild;
  session: any;
  loading: any;
}

function timeout(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

class AutoRole extends React.Component<
  AutoRoleProps,
  {
    selected: any;
    alert: string | boolean;
    alertStatus: string | null;
    alertBool: boolean;
    alertCustomClasses: string;
    rateLimited: boolean;
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
      triggerUpdate: true,
    };

    this.updateState = this.updateState.bind(this);
  }

  componentWillUnmount() {
    window.sessionStorage.setItem("auto_role", this.state.selected.id);
  }

  async componentDidMount() {
    const { session, loading } = this.props;
    let jsonRes: any;
    let selected;

    if (sessionStorage.getItem("auto_role") === null) {
      jsonRes = this.props.guild.config;

      if (jsonRes.auto_role == null) {
        jsonRes.auto_role = 0;
      }

      jsonRes = jsonRes.auto_role;
    } else {
      jsonRes = window.sessionStorage.getItem("auto_role");
    }

    const index = this.props.guild.roles.findIndex((x: any) => x.id == jsonRes);

    this.setState({
      selected: this.props.guild.roles[index],
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

        this.setState({
          alert: "Applying the changes",
          alertStatus: "blue",
          alertBool: true,
          alertCustomClasses: "animate-pulse",
        });

        const role_id = this.state.selected.id;
        const jsonRes = await make_request(
          `${process.env.APP_URI}/api/${this.props.guild.id}/update/auto_role?data=${role_id}`,
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

  static getDerivedStateFromProps(props: AutoRoleProps) {
    function removeManaged(entry: { managed: boolean }) {
      return !entry.managed;
    }

    const filteredManaged = props.guild.roles.filter(removeManaged);

    let roles = [];

    for (let channel of filteredManaged) {
      if (!channel["name"].startsWith("@")) {
        if (channel["id"] !== 0) {
          channel["name"] = "@" + channel["name"];
        }
      }

      roles.push(channel);
    }

    const noneRole = roles.findIndex((x) => x.id == 0);
    if (noneRole === -1) {
      roles.push({
        id: 0,
        name: "None",
        color: 0,
        permission_new: "0",
        permission: 0,
        managed: false,
      });
    }

    props.guild.roles = roles;

    return props;
  }

  updateState(state: any) {
    this.setState({
      selected: state,
    });
  }

  render() {
    return this.state.selected ? (
      <div className="flex justify-center place-items-center">
        <Select
          name=""
          data={this.props.guild.roles}
          selected={this.state.selected}
          setSelected={this.updateState}
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
      <AutoRoleShimmer />
    );
  }
}

const ClassComponentWithSession = withSession(AutoRole);

export default ClassComponentWithSession;
