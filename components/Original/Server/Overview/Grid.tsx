import Column1 from "./Columns/Column1";
import Column2 from "./Columns/Column2";
import discordGuild from "@/interfaces/discordGuild";

const DashBoardGrid = (props: { guild: discordGuild }) => {
  return (
    <div className="block md:grid grid-cols-2 gap-4 justify-center space-y-4 md:space-y-0">
      <Column1 guild={props.guild} />
      <Column2 guild={props.guild} />
    </div>
  );
};

export default DashBoardGrid;
