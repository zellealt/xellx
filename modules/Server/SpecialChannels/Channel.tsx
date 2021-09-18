import React, { Component, useState } from "react";
import Select from "../../../components/Original/Forms/Select";
import { useSession } from "next-auth/client";
import SpecialChannelsShimmer from "@/shimmeredModules/Server/SpecialChannels";
import SnackBar from "../../Layout/SnackBar";
import config from "../../../interfaces/config";
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
    window.sessionStorage.setItem(this.props.id, this.state.selected.id);
  }

  async componentDidMount() {
    let jsonRes: any;
    if (sessionStorage.getItem(this.props.id) === null) {
      jsonRes = this.props.guild.config;

      if (jsonRes[this.props.id] == null) {
        jsonRes[this.props.id] = 0;
      }

      jsonRes = jsonRes[this.props.id];
    } else {
      jsonRes = window.sessionStorage.getItem(this.props.id);
    }
    const { session, loading } = this.props;

    const index = this.props.guild.channels.findIndex(
      (x: any) => x.id == jsonRes
    );

    this.setState({
      selected: this.props.guild.channels[index],
      alert: false,
      rateLimited: false,
    });
    this.props.setShimmer(false);
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
          `${process.env.APP_URI}/api/${this.props.guild.id}/update/${this.props.id}?data=${role_id}`,
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

  static async getDerivedStateFromProps(props: SpecialChannelsProps) {
    const res = props.guild.channels;

    let channels = [];

    for (let channel of res) {
      channel["color"] = 0;

      if (!channel["name"].startsWith("#")) {
        if (channel["id"] !== 0) {
          channel["name"] = "#" + channel["name"];
        }
      }

      channels.push(channel);
    }

    const noneRole = channels.findIndex((x) => x.id == 0);
    if (noneRole === -1) {
      channels.push({
        id: 0,
        name: "None",
        color: 0,
        permission_new: "0",
        permission: 0,
        managed: false,
      });
    }

    props.guild["channels"] = channels;

    return props;
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
        <SnackBar
          customClasses={this.state.alertCustomClasses}
          alert={this.state.alert}
          alertBool={this.state.alertBool}
          alertStatus={this.state.alertStatus}
        />
      </div>
    ) : (
      <SpecialChannelsShimmer />
    );
  }
}

const ClassComponentWithSession = withSession(SpecialChannel);

export default ClassComponentWithSession;
