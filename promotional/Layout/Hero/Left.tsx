import Button from "@/original/Buttons/Button";
import XellxPartialBrand from "@/original/Layout/Header/XellxPartialBrand";
import { PaddingSpacer } from "@/original/Layout/Spacer";
import React from "react";
import ChipWithLinkText from "../ChipWithLinkText";

const Left = () => {
  return (
    <div className="m-auto space-y-6 ml-10 pr-5 mt-16 lg:mt-auto">
      <div className="hidden lg:block">
        <XellxPartialBrand height="12" color="indigo-600" />
      </div>
      <PaddingSpacer px={16} />
      <ChipWithLinkText
        link="/dashboard"
        chipText="what's new"
        text="Version 0.0.1 is releasing"
      />

      <h1
        style={{
          maxWidth: 600,
          wordWrap: "break-word",
        }}
        className="text-5xl text-gray-800 font-sans font-black lg:mr-10 dark:text-gray-100"
      >
        A new bot for a new generation
      </h1>

      <p
        style={{
          maxWidth: 500,
          wordWrap: "break-word",
        }}
        className="text-gray-400 font-semibold dark:text-gray-300"
      >
        Discord Bots have not evolved for years now. Confusing dashboards. Bare
        mobile support.
      </p>

      <div className="space-x-4">
        <Button text="Invite" onClick={null} href="" color="indigo" />
        <Button
          text="Go to the Dashboard"
          onClick={null}
          href="/login"
          color="indigo"
        />
      </div>
    </div>
  );
};

export default Left;
