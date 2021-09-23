import Button from "@/original/Buttons/Button";
import XellxPartialBrand from "@/original/Layout/Header/XellxPartialBrand";
import { PaddingSpacer } from "@/original/Layout/Spacer";
import React from "react";
import ChipWithLinkText from "../ChipWithLinkText";

const Text = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 p-10 rounded-lg shadow-lg">
      <div className="space-y-6">
        <div className="flex justify-center">
          <XellxPartialBrand height="12" color="indigo-600" />
        </div>
        <PaddingSpacer px={16} />
        <ChipWithLinkText
          link="/changelog"
          chipText="what's new"
          text="Version 0.0.3 has released"
        />

        <div className="max-w-lg space-y-5 text-center m-auto">
          <h1 className="text-5xl text-gray-800 font-sans font-black dark:text-gray-100 text-center">
            A new bot for a new generation
          </h1>

          <p className="text-center text-gray-400 font-semibold dark:text-gray-300 m-auto">
            Discord Bots have not evolved for years now. Confusing dashboards.
            Bare mobile support.
          </p>
        </div>

        <div className="space-x-4 flex justify-center">
          <Button
            text="Go to the Dashboard"
            onClick={() =>
              window.open("/login", "Data", "height=600,width=400")
            }
            href=""
            color="indigo"
          />
        </div>
      </div>
    </div>
  );
};

export default Text;
