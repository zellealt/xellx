import React, { Component, useState } from "react";
import Select from "../../../components/Original/Forms/Select";
import { useSession } from "next-auth/client";
import SpecialChannelsShimmer from "@/shimmeredModules/Server/SpecialChannels/SpecialChannels";
import config from "../../../interfaces/config";
import make_request from "@/lib/make_request";
import ComponentDidUpdateMethod from "./ComponentDidUpdate";
import ComponentWillUnmountMethod from "./ComponentWillUnmount";
import ComponentDidMountMethod from "./ComponentDidMount";
import GetDerivedStateFromPropsMethod from "./GetDerivedStateFromProps";
import withSession from "@/hooks/withSesssion";

interface discordGuild {
  id: number;
  icon: string;
  name: string;
  channels: any;
  config: config;
}

interface SpecialChannelsProps {
  guild: discordGuild;
  session: any;
  loading: any;
  friendlyName: string;
  id: any;
  setShimmer: any;
}

function timeout(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

class SpecialChannel extends React.Component<
  SpecialChannelsProps,
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

  static async getDerivedStateFromProps(props: SpecialChannelsProps) {
    return await GetDerivedStateFromPropsMethod(props);
  }

  updateState(state: any) {
    this.setState({
      selected: state,
    });
  }

  render() {
    return this.state.selected ? (
      <div>
        <Select
          name={this.props.friendlyName}
          data={this.props.guild.channels}
          selected={this.state.selected}
          setSelected={this.updateState}
        />
        <br />
        {this.state.snackbar && this.state.snackbar}
      </div>
    ) : (
      <SpecialChannelsShimmer />
    );
  }
}

const ClassComponentWithSession = withSession(SpecialChannel);

export default ClassComponentWithSession;
