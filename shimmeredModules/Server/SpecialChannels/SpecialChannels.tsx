import React from "react";
import Content from "../Contents/SpecialChannel";
import Shimmer from "@/shimmered/Shimmer";

const SpeicalChannels = () => {
  return (
    <div>
      <Shimmer width={80} height={3} rounded="sm" />
      <Content />
      <Content />
    </div>
  );
};

export default SpeicalChannels;
