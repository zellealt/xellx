import RoundActionBtn from "./RoundActionBtn";
import RefreshIcon from "@material-ui/icons/RefreshRounded";
import { useRouter } from "next/router";

const Refresh = () => {
  const router = useRouter();

  return (
    <RoundActionBtn svg={<RefreshIcon />} link="/statistics" onClick={null} />
  );
};

export default Refresh;
