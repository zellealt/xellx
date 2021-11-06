import ClearIcon from "@mui/icons-material/Clear";
import CheckIcon from "@mui/icons-material/Check";
import React from "react";
import { Typography } from "@mui/material";

const PluginName = (props: { name: string; activated: boolean }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "left",
        placeItems: "center",
        gap: 5,
      }}
    >
      <Typography variant="h5" component="div">
        {props.name}
      </Typography>
      {props.activated ? (
        <CheckIcon color="success" />
      ) : (
        <ClearIcon color="error" />
      )}
    </div>
  );
};

export default PluginName;
