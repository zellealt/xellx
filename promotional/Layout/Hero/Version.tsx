import XellxPartialBrand from "@/original/Layout/Header/XellxPartialBrand";
import React from "react";
import LatestVersion from "@/original/Changelog/Versions/HomeLatest";

const Version = () => {
  return (
    <div className="p-10 rounded-lg space-y-5">
      <div>
        <XellxPartialBrand height="12" color="black dark:text-white" />
      </div>
      <div>
        <h1 className="text-5xl text-gray-800 font-sans font-black dark:text-gray-100">
          Latest Version
        </h1>
        <p className="text-gray-600 dark:text-gray-300 m-auto">
          Xellx's latest and greatest new release
        </p>
      </div>

      <div className="space-y-10">
        <LatestVersion />
      </div>
    </div>
  );
};

export default Version;
