import React from "react";
import { Dash } from "../Navigation";
import Item from "./Item";

const Dashboard = () => {
  return (
    <div className="mt-2 space-y-2">
      {Dash.map((item) => {
        return <Item key={item.href} item={item} />;
      })}
    </div>
  );
};

export default Dashboard;
