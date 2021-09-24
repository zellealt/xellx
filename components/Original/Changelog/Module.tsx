import Card from "@/original/Cards/Card";
import Cards from "./Card";

import React from "react";
import Latest from "./Versions/Latest";
import V003 from "./Versions/0.0.3";
import V002 from "./Versions/0.0.2";
import V001 from "./Versions/0.0.1";

const Module = () => {
  return (
    <div className="p-3 md:p-0 md:flex md:gap-5 space-y-5 md:space-y-0">
      <div className="md:w-3/5 space-y-5">
        <Latest />
        <V003 />
      </div>
      <div className="md:w-2/5 space-y-5">
        <V002 />
        <V001 />
      </div>
    </div>
  );
};

export default Module;
