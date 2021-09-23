import React from "react";
import About from "./Hero/About";
import Text from "./Hero/About";
import Image from "./Hero/Image";

const Hero = () => {
  return (
    <div className="space-y-36">
      <div className="grid justify-center dark:bg-gray-800 bg-gray-200 p-10 shadow-lg gap-10 grid-cols-2">
        <Text />
        <About />
      </div>
      <Image />
    </div>
  );
};

export default Hero;
