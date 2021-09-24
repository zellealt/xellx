import Button from "@/original/Buttons/Button";
import XellxPartialBrand from "@/original/Layout/Header/XellxPartialBrand";
import { PaddingSpacer } from "@/original/Layout/Spacer";
import React from "react";
import ChipWithLinkText from "../ChipWithLinkText";

const Text = () => {
  return (
    <div className="flex flex-col sm:items-center justify-center max-w-2xl px-4 pt-16 mx-auto sm:max-w-xl md:max-w-2xl lg:pt-32 md:px-8">
      <div className="pb-10">
        <XellxPartialBrand height="16" color="indigo-500" />
      </div>

      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div className="inline-block py-px mb-4 text-xs font-semibold tracking-wider uppercase rounded-full">
          <ChipWithLinkText
            link="/changelog"
            chipText="0.0.4 Alpha"
            text="New Release"
          />
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 dark:text-white sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-indigo-700 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="9ef1ff62-feb2-41fe-8163-772b4c79de7b"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#9ef1ff62-feb2-41fe-8163-772b4c79de7b)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">A n</span>
          </span>
          ew bot for a new generation
        </h2>
        <p className="text-base text-gray-700 dark:text-gray-300 md:text-lg">
          Discord Dashboard's haven't evolved in years. Broken UI's, Ads, and
          Bare Mobile Support.
        </p>
      </div>
      <div className="mb-20 z-50">
        <Button
          text="Sign In to Discord"
          onClick={() => window.open("/login", "Data", "height=600,width=400")}
          href=""
          color="indigo"
        />
      </div>

      <p className="max-w-md -mb-20 text-xs text-gray-600 dark:text-gray-300 sm:text-sm md:text-center">
        By signing in to Xellx you are agreeing to the Privacy Policy and the
        Terms of Service.
      </p>
    </div>
  );
};

export default Text;
