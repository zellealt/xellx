import React from "react";
import Shimmer from "@/shimmered/Shimmer";
import Spacer from "@/original/Layout/Spacer";

const StickyRoles = () => {
  return (
    <div>
      <Shimmer width={64} height={3} rounded="sm" />
      <Spacer px={42} />
      <div className="flex gap-5 flex-wrap">
        <Shimmer width="2/12" height={5} rounded="sm" />
        <Shimmer width="3/12" height={5} rounded="sm" />
        <Shimmer width="4/12" height={5} rounded="sm" />
        <Shimmer width="2/12" height={5} rounded="sm" />
        <Shimmer width="4/12" height={5} rounded="sm" />
        <Shimmer width="5" height={5} rounded="full" />
      </div>
    </div>
  );
};

export default StickyRoles;
