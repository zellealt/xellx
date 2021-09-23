import CommandCard from "@/original/Cards/CommandCard";
import CustomCard from "@/original/Cards/CustomCard";
import discordGuild from "@/interfaces/discordGuild";
import pluginData from "@/interfaces/pluginData";
import React from "react";
import StickyRoles from "@/modules/Server/StickyRoles/StickyRoles";
import SpecialChannels from "@/modules/Server/SpecialChannels/SpecialChannels";
import AutoRole from "@/modules/Server/AutoRole/AutoRole";

class DashBoardGrid extends React.Component<
  { guild: discordGuild },
  {
    data: pluginData[] | null;
  }
> {
  constructor(props: any) {
    super(props);
    this.state = {
      data: null,
    };
  }

  async componentDidMount() {
    const data = await fetch("/plugins.json");
    const dataJson = await data.json();

    this.setState({
      data: dataJson,
    });
  }

  render() {
    return (
      <div className="grid sm:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
        {this.state.data &&
          this.state.data.map((entry) => {
            return (
              <CommandCard
                commands={entry.commands}
                config={entry.config}
                guild={this.props.guild}
                key={entry.id}
                id={entry.id}
                name={entry.name}
                long_desc={entry.long_desc}
                short_desc={entry.short_desc}
              />
            );
          })}
        <CustomCard
          guild={this.props.guild}
          key="sticky_roles"
          name="Sticky Roles"
          long_desc="When a user leaves the server with one one of the specified roles, upon joining back it will automaticly be applied."
          short_desc="Specified roles will stay on the user after rejoin."
          content={
            <StickyRoles defaultroles={false} guild={this.props.guild} />
          }
        />
        <CustomCard
          guild={this.props.guild}
          key="special_channels"
          name="Special Channels"
          long_desc="Channels such as the audit log and the welcome messages channel are requied for these to function."
          short_desc="Channels which are requied for certain functions."
          content={<SpecialChannels guild={this.props.guild} />}
        />
        <CustomCard
          guild={this.props.guild}
          key="auto_role"
          name="Auto Role"
          long_desc="When a user joins the server the specified role will automaticlly applied."
          short_desc="Automatically assigns role to all new users."
          content={<AutoRole guild={this.props.guild} />}
        />
      </div>
    );
  }
}

export default DashBoardGrid;
