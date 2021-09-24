import React from "react";
import Item from "./Item";
import { Promo } from "../Navigation";

const Promotional = () => {
  return (
    <div className="mt-2 space-y-2">
      {Promo.map((item) => {
        return <Item key={item.href} item={item} />;
      })}
    </div>
  );
};

export default Promotional;
