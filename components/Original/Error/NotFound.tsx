import XellxPartialBrand from "@/original/Layout/Header/XellxPartialBrand";
import Link from "next/link";
import React from "react";
import KeyboardBackspaceRoundedIcon from "@material-ui/icons/KeyboardBackspaceRounded";
const NotFound = () => {
  return (
    <div className="center">
      <div>
        <div className="flex justify-center place-items-center">
          <XellxPartialBrand color="indigo-700" height="16" />
        </div>
        <div className="text-center">
          <h3 className="uppercase text-indigo-700 mt-10 font-semibold">
            404 Not Found
          </h3>
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white">
            Page not found.
          </h1>
          <p className="text-gray-500 mt-1 mb-5">
            Sorry, we couldn't find the page you're looking for.
          </p>
          <div className="text-indigo-700 mt-5 font-semibold">
            <KeyboardBackspaceRoundedIcon className="mr-2 mb-0.5" />
            <Link href="/dashboard">Go back home</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NotFound;