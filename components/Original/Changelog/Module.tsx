import Card from "@/original/Cards/Card";
import Cards from "./Card";

import React from "react";
import V003 from "./Versions/Latest";
import V002 from "./Versions/0.0.2";
import V001 from "./Versions/0.0.1";

const Module = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      <V003 />

      <V002 />

      <V001 />
    </div>
  );
};

export default Module;
