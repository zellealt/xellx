import XellxPartialBrand from "@/original/Layout/Header/XellxPartialBrand";
import React from "react";

const NotFound = () => {
  return (
    <div className="center">
      <div>
        <div className="flex justify-center place-items-center">
          <XellxPartialBrand color="indigo-700" height="16" />
        </div>
        <div className="text-center">
          <h3 className="uppercase text-indigo-700 mt-10 font-semibold">
            Oops
          </h3>
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white">
            No Servers.
          </h1>
          <p className="text-gray-500 mt-1 mb-5">
            You are not in any servers that you can manage.
          </p>
        </div>
      </div>
    </div>
  );
};
export default NotFound;
