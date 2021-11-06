import React from "react";
import Avatar from "@mui/material/Avatar";
import formatGuildIcon from "../../client-lib/formatGuildIcon";
import {
  red,
  pink,
  purple,
  deepPurple,
  indigo,
  blue,
  lightBlue,
  cyan,
  teal,
  green,
  lightGreen,
  lime,
  yellow,
  amber,
  orange,
  deepOrange,
  blueGrey,
} from "@mui/material/colors";
import { SxProps, Theme } from "@mui/system";

const colours = [
  red,
  pink,
  purple,
  deepPurple,
  indigo,
  blue,
  lightBlue,
  cyan,
  teal,
  green,
  lightGreen,
  lime,
  yellow,
  amber,
  orange,
  deepOrange,
  blueGrey,
];

export const ServerIcon = (props: {
  guild: {
    id: number | bigint | BigInt | string;
    name: string;
    icon: number | bigint | BigInt | string;
  };
  explicitColour?: string;
  sx?: any;
}) => {
  const colour = colours[Math.floor(Math.random() * colours.length)][500];
  let sx = props?.sx;
  sx.bgcolor = props.explicitColour ? props.explicitColour : colour;
  return (
    <Avatar
      sx={props.sx}
      src={formatGuildIcon(props.guild?.id, props.guild?.icon)}
    >
      {props.guild?.name
        ?.split(" ")
        .map((word: string) => word?.substring(0, 1))}
    </Avatar>
  );
};
