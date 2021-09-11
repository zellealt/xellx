import SquareCard from "../Cards/SquareCard";

const Cards = (props: { guilds: number; globalStatus: any }) => {
  let colorStatus = "";
  let barFraction = "";
  if (props.globalStatus.indicator === "none") {
    colorStatus = "green-500";
    barFraction = "full";
  }
  if (props.globalStatus.indicator === "maintenance") {
    colorStatus = "blue-500";
    barFraction = "3/4";
  }
  if (props.globalStatus.indicator === "minor") {
    colorStatus = "yellow-500";
    barFraction = "2/4";
  }
  if (props.globalStatus.indicator === "major") {
    colorStatus = "yellow-600";
    barFraction = "1/4";
  }
  if (props.globalStatus.indicator === "critical") {
    colorStatus = "red-500";
    barFraction = "0";
  }

  return (
    <div className="space-y-8 p-3 md:flex md:gap-20 md:space-y-0 md:p-0">
      <SquareCard
        mdWidth="1/4"
        title="Location"
        value="UK"
        color="blue-500"
        fraction="0"
      />
      <SquareCard
        mdWidth="2/4"
        title="Status"
        value={props.globalStatus.description}
        color={colorStatus}
        fraction={barFraction}
      />
      <SquareCard
        mdWidth="1/4"
        title="Servers"
        value={props.guilds.toString()}
        color="indigo-500"
        fraction="1/12"
      />
    </div>
  );
};

export default Cards;
