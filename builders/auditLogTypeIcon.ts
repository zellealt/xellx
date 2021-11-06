import AddModeratorIcon from "@mui/icons-material/AddModerator";
import DashboardIcon from "@mui/icons-material/Dashboard";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

const AuditLogTypeIcon = (icon: string) => {
  switch (icon) {
    case "DISCORD":
      return AddModeratorIcon;
    case "DASHBOARD":
      return DashboardIcon;
    default:
      return HelpOutlineIcon;
  }
};

export default AuditLogTypeIcon;
