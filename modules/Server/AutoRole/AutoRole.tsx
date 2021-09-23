import React from "react";
import discordGuild from "@/interfaces/discordGuild";
import Select from "@/original/Forms/Select";
import AutoRoleShimmer from "@/shimmeredModules/Server/AutoRole";
import withSession from "@/hooks/withSesssion";
import ComponentDidUpdateMethod from "./ComponentDidUpdate";
import ComponentWillUnmountMethod from "./ComponentWillUnmount";
import ComponentDidMountMethod from "./ComponentDidMount";
import GetDerivedStateFromPropsMethod from "./GetDerivedStateFromProps";

interface AutoRoleProps {
  guild: discordGuild;
  session: any;
  loading: any;
}

class AutoRole extends React.Component<
  AutoRoleProps,
  {
    selected: any;
    triggerUpdate: boolean;
    snackbar: any;
  }
> {
  constructor(props: any) {
    super(props);

    this.state = {
      selected: false,
      triggerUpdate: false,
      snackbar: false,
    };

    this.updateState = this.updateState.bind(this);
  }

  componentWillUnmount() {
    return ComponentWillUnmountMethod(this, window);
  }

  async componentDidMount() {
    return await ComponentDidMountMethod(this, window);
  }

  async componentDidUpdate(prevProps: any, prevState: any) {
    return await ComponentDidUpdateMethod(this, prevState);
  }

  static getDerivedStateFromProps(props: AutoRoleProps) {
    return GetDerivedStateFromPropsMethod(props);
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
        {this.state.snackbar && this.state.snackbar}
      </div>
    ) : (
      <AutoRoleShimmer />
    );
  }
}

const ClassComponentWithSession = withSession(AutoRole);

export default ClassComponentWithSession;
