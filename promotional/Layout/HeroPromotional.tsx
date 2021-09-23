import React from "react";
import About from "./Hero/About";
import Version from "./Hero/Version";
import Image from "./Hero/Image";

const Hero = () => {
  return (
    <div className="space-y-36">
      <div className="grid justify-center dark:bg-gray-800 bg-gray-200 p-3 md:p-10 shadow-lg gap-10 grid-cols-1 lg:grid-cols-2">
        <About />
        <Version />
      </div>
      <Image />
    </div>
  );
};

export default Hero;
