import React from "react";
import { Other } from "../Navigation";
import Item from "./Item";

const OtherNAv = () => {
  return (
    <div className="mt-2 space-y-2">
      {Other.map((item) => {
        return <Item key={item.href} item={item} />;
      })}
    </div>
  );
};

export default OtherNAv;
