import * as React from "react";
import Divider from "@mui/material/Divider";
import Drawer, { DrawerProps } from "@mui/material/Drawer";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import AppsIcon from "@mui/icons-material/Apps";
import DnsRoundedIcon from "@mui/icons-material/DnsRounded";
import PermMediaOutlinedIcon from "@mui/icons-material/PhotoSizeSelectActual";
import PublicIcon from "@mui/icons-material/Public";
import SettingsEthernetIcon from "@mui/icons-material/SettingsEthernet";
import SettingsInputComponentIcon from "@mui/icons-material/SettingsInputComponent";
import TimerIcon from "@mui/icons-material/Timer";
import SettingsIcon from "@mui/icons-material/Settings";
import PhonelinkSetupIcon from "@mui/icons-material/PhonelinkSetup";
import Link from "next/link";
import { useRouter } from "next/router";
import { SessionContext } from "../contexts/SessionContext";
import { ServerIcon } from "../components/ServerIcon";

export default function Navigator(props: DrawerProps) {
  const router = useRouter();

  const inURL = (pathname: string) => router.asPath.includes(pathname);

  const { session, setSession } = React.useContext(SessionContext);

  const categories = [
    {
      id: "Home",
      children: [
        {
          id: "Selector",
          icon: <AppsIcon />,
          active: inURL("selector"),
          href: "/selector",
        },
        {
          id: "Status",
          icon: <DnsRoundedIcon />,
          active: inURL("status"),
          href: "/status",
        },
        {
          id: "Changelog",
          icon: <PermMediaOutlinedIcon />,
          active: inURL("chanagelog"),
          href: "/changelog",
        },
      ],
    },
  ];

  const item = {
    py: "2px",
    px: 3,
    color: "rgba(255, 255, 255, 0.7)",
    "&:hover, &:focus": {
      bgcolor: "rgba(255, 255, 255, 0.08)",
    },
  };

  const itemCategory = {
    boxShadow: "0 -1px 0 rgb(255,255,255,0.1) inset",
    py: 1.5,
    px: 3,
  };

  const { ...other } = props;

  return (
    <Drawer variant="permanent" {...other}>
      <List disablePadding>
        <ListItem
          sx={{ ...item, ...itemCategory, fontSize: 22, color: "#fff" }}
        >
          Xellx
        </ListItem>
        <ListItem sx={{ ...item, ...itemCategory }}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText>Project Overview</ListItemText>
        </ListItem>
        {categories.map(({ id, children }) => (
          <Box key={id} sx={{ bgcolor: "#18183A" }}>
            <ListItem sx={{ py: 2, px: 3 }}>
              <ListItemText sx={{ color: "#fff" }}>{id}</ListItemText>
            </ListItem>
            {children.map(({ id: childId, icon, active, href }) => (
              <Link href={href} key={childId}>
                <ListItem disablePadding>
                  <ListItemButton selected={active} sx={item}>
                    <ListItemIcon>{icon}</ListItemIcon>
                    <ListItemText>{childId}</ListItemText>
                  </ListItemButton>
                </ListItem>
              </Link>
            ))}
            <Divider sx={{ mt: 2 }} />
          </Box>
        ))}

        <Box key="Servers" sx={{ bgcolor: "#18183A" }}>
          <ListItem sx={{ py: 2, px: 3 }}>
            <ListItemText sx={{ color: "#fff" }}>Servers</ListItemText>
          </ListItem>
          {session?.guilds?.map(({ id, name }) => (
            <Link href={`/manage/${id}/app`} key={id}>
              <ListItem disablePadding>
                <ListItemButton
                  selected={router.asPath.includes(id.toString())}
                  sx={item}
                >
                  <ListItemIcon>
                    <DnsRoundedIcon />
                  </ListItemIcon>
                  <ListItemText>{name}</ListItemText>
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
          <Divider sx={{ mt: 2 }} />
        </Box>
      </List>
    </Drawer>
  );
}
