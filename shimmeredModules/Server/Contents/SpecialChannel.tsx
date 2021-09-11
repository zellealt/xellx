import Spacer from "@/original/Layout/Spacer";
import React from "react";
import Shimmer from "@/shimmered/Shimmer";

const SpeicalChannels = () => {
  return (
    <div>
      <Spacer px={42} />
      <div className="col-span-2 mb-1">
        <Shimmer width="1/12" height={3} rounded="sm" />
      </div>
      <Shimmer width="3/12" height={7} rounded="sm" />
    </div>
  );
};

export default SpeicalChannels;
