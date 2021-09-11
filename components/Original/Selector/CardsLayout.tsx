import discordGuild from "@/interfaces/discordGuild";
import ServerCard from "@/original/Cards/ServerCard";
import FullWidthButton from "@/original/Buttons/FullWidthButton";
function ServerCardsLayout(props: { guild: discordGuild }) {
  return (
    <div className="px-4 lg:px-0 md:px-0">
      <ServerCard
        section={
          <FullWidthButton
            onClick={null}
            href={`/server/${props.guild.id}/overview`}
            color="indigo"
            text="Manage"
          />
        }
        icon={
          "https://cdn.discordapp.com/icons/" +
          props.guild.id +
          "/" +
          props.guild.icon
        }
        id={props.guild.id}
        isNull={props.guild.icon}
        name={props.guild.name}
      />
    </div>
  );
}

export default ServerCardsLayout;
