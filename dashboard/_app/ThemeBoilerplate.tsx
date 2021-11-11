import * as React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Navigator from "../theme/Navigator";
import { drawerWidth, exportedTheme, Copyright } from "../theme/Paperbase";
import AppBar from "../theme/AppBarSelector";

const _theme = (props: { children: any }) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const isSmUp = useMediaQuery(exportedTheme.breakpoints.up("sm"));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <CssBaseline />
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      >
        {isSmUp ? null : (
          <Navigator
            PaperProps={{ style: { width: drawerWidth } }}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
          />
        )}
        <Navigator
          PaperProps={{ style: { width: drawerWidth } }}
          sx={{ display: { sm: "block", xs: "none" } }}
        />
      </Box>
      <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <AppBar onDrawerToggle={handleDrawerToggle} />
        <Box component="main" sx={{ flex: 1, py: 6, px: 4 }}>
          {props.children}
        </Box>
        <Box component="footer" sx={{ p: 2 }}>
          <Copyright />
        </Box>
      </Box>
    </Box>
  );
};

export default _theme;
