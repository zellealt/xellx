import RoundActionBtn from "./RoundActionBtn";
import ArrowBackIcon from "@material-ui/icons/ArrowBackRounded";

const GoBack = () => {
  return <RoundActionBtn svg={<ArrowBackIcon />} link="/" onClick={null} />;
};

export default GoBack;
