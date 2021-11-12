import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Skeleton } from "@mui/material";

const StatCard = (props: { title: string; value: string }) => {
  const titleLoading = !props.title;
  const valueLoading = !props.value || props.value === "NaN";

  return (
    <Card variant="outlined">
      <CardContent>
        <Typography
          sx={{ fontSize: 14, textAlign: "center" }}
          color="text.secondary"
          gutterBottom
        >
          {titleLoading ? <Skeleton animation="wave" /> : props.title}
        </Typography>
        <Typography sx={{ textAlign: "center" }} variant="h5" component="div">
          {valueLoading ? <Skeleton animation="wave" /> : props.value}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default StatCard;
