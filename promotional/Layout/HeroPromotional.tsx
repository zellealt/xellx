import React from "react";
import About from "./Hero/About";
import Version from "./Hero/Version";
import Image from "./Hero/Image";

const Hero = () => {
  return (
    <div className="space-y-36">
      <About />
      <Image />
    </div>
  );
};

export default Hero;
