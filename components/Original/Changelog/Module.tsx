import Card from "@/original/Cards/Card";
import Cards from "./Card";

import React from "react";
import V002 from "./Versions/0.0.2";
import V001 from "./Versions/0.0.1";

const Module = () => {
  return (
    <div className="md:grid md:grid-cols-2 md:gap-10">
      <V002 />

      <V001 />
    </div>
  );
};

export default Module;
