import React from "react";
import discordGuild from "@/interfaces/discordGuild";
import StickyRolesShimmer from "@/shimmeredModules/Server/StickyRoles";
import Chip from "@/original/Forms/Chip";
import CircleChip from "@/original/Forms/IconChip";
import CustomSelect from "@/original/Forms/CustomSelect";
import AddIcon from "@material-ui/icons/AddRounded";
import ComponentDidMountMethod from "./ComponentDidMount";
import withSession from "@/hooks/withSesssion";
import GetRolesMethod from "./GetRoles";
import AddRoleMethod from "./AddRole";
import RemoveRoleMethod from "./RemoveRole";
import ComponentDidUpdateMethod from "./ComponentDidUpdate";
import ComponentWillUnmountMethod from "./ComponentWillUnmount";
import GetDerivedStateFromPropsMethod from "./GetDerivedStateFromProps";

interface StickyRolesProps {
  guild: discordGuild;
  session: any;
  loading: any;
  componentstate: any;
}

class StickyRoles extends React.Component<
  StickyRolesProps,
  {
    selected: any;
    dropDown: boolean;
    triggerUpdate: boolean;
    snackbar: any;
  }
> {
  constructor(props: any) {
    super(props);

    this.state = {
      selected: false,
      dropDown: false,
      triggerUpdate: false,
      snackbar: false,
    };

    this.addRole = this.addRole.bind(this);
    this.removeRole = this.removeRole.bind(this);
  }

  componentWillUnmount() {
    ComponentWillUnmountMethod(window, this);
  }

  async componentDidMount() {
    return await ComponentDidMountMethod(this);
  }

  static getDerivedStateFromProps(props: StickyRolesProps, state: any) {
    return GetDerivedStateFromPropsMethod(props, state, window);
  }

  async componentDidUpdate(prevProps: any, prevState: any) {
    return await ComponentDidUpdateMethod(prevProps, prevState, this);
  }

  removeRole(state: any) {
    return RemoveRoleMethod(state, this);
  }

  getRoles() {
    return GetRolesMethod(this);
  }
  addRole(state: any) {
    return AddRoleMethod(state, this);
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
            return (
              <Chip
                key={role.id}
                remove={() => this.removeRole(role)}
                intColor={role.color}
                text={role.name}
                name="discordId"
              />
            );
          })}
        />
        <br />
        {this.state.snackbar && this.state.snackbar}
      </div>
    ) : (
      <StickyRolesShimmer />
    );
  }
}

const ClassComponentWithSession = withSession(StickyRoles);

export default ClassComponentWithSession;
