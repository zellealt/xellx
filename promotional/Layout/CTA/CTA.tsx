import Button from "@/original/Buttons/Button";
import React from "react";
import SignInToDiscord from "../Buttons/SignInToDiscord";

const CTA = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-screen-sm sm:text-center sm:mx-auto">
        <a
          aria-label="View"
          className="inline-block mb-5 rounded-full sm:mx-auto"
        >
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 dark:bg-gray-800">
            <svg
              className="w-12 h-12 text-indigo-400"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </svg>
          </div>
        </a>
        <h2 className="mb-4 font-sans text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl sm:leading-none">
          What are you waiting for?
        </h2>
        <p className="text-base text-gray-700 dark:text-gray-200 md:text-lg sm:px-4">
          Simply click the button and authorize!
        </p>
        <hr className="w-full my-8 border-gray-300 dark:border-gray-700" />
        <SignInToDiscord />
      </div>
    </div>
  );
};

export default CTA;
