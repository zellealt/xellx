import * as React from "react";
import AppBar from "@mui/material/AppBar";
import { Box, TextField } from "@mui/material";
const lightColor = "rgba(255, 255, 255, 0.7)";

interface HeaderProps {
  onDrawerToggle: () => void;
}

export default function Header(props: HeaderProps) {
  return (
    <AppBar
      component="div"
      position="static"
      elevation={0}
      sx={{ zIndex: 0 }}
      enableColorOnDark={true}
    >
      <Box sx={{ height: 10 }}></Box>
    </AppBar>
  );
}
