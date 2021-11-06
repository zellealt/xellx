import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import HelpIcon from "@mui/icons-material/Help";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
import NextLink from "next/link";
import MUILink from "@mui/material/Link";
import { ServerManageContext } from "../../contexts/ServerManageContext";

const lightColor = "rgba(255, 255, 255, 0.7)";

interface HeaderProps {
  onDrawerToggle: () => void;
}

export default function Header(props: HeaderProps) {
  const { onDrawerToggle } = props;
  const router = useRouter();
  const [tabState, setTabState] = React.useState(0);
  const { page, setPage } = React.useContext(ServerManageContext);

  const handleTabs = (event: any, value: number) => {
    setPage(event.target.innerText.toLowerCase().replace(" ", ""));
    setTabState(value);
    return;
  };

  return (
    <AppBar
      enableColorOnDark={true}
      component="div"
      position="static"
      elevation={0}
      sx={{ zIndex: 0 }}
    >
      <Tabs
        value={tabState}
        onChange={(event, value) => {
          handleTabs(event, value);
        }}
        textColor="inherit"
      >
        <Tab label="Overview" />
        <Tab label="Plugins" />
        <Tab label="Audit Log" />
        <Tab label="Settings" />
      </Tabs>
    </AppBar>
  );
}
