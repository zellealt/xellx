import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const PluginCard = (props: {
  onClick?: () => void;
  type: any;
  version: any;
  name: any;
  description: any;
}) => {
  return (
    <React.Fragment>
      <Card variant="outlined">
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {props.type}
          </Typography>
          <Typography variant="h5" component="div">
            {props.name}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {props.version}
          </Typography>
          <Typography variant="body2">{props.description}</Typography>
        </CardContent>
        <CardActions>
          <Button onClick={props.onClick} size="small">
            Settings
          </Button>
        </CardActions>
      </Card>
    </React.Fragment>
  );
};

export default PluginCard;
