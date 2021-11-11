import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const StatCard = (props: { title: string; value: string }) => {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography
          sx={{ fontSize: 14, textAlign: "center" }}
          color="text.secondary"
          gutterBottom
        >
          {props.title}
        </Typography>
        <Typography sx={{ textAlign: "center" }} variant="h5" component="div">
          {props.value}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default StatCard;
