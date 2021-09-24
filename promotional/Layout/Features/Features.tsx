import {
  FireIcon,
  LightningBoltIcon,
  ChatAlt2Icon,
  RssIcon,
} from "@heroicons/react/outline";
import XellxPartialBrand from "promotional/Header/XellxPartialBrand";
import React from "react";
import Entry from "./Entry";

const Feature = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            <XellxPartialBrand height="16" color="black dark:text-white" />
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-indigo-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="27df4f81-c854-45de-942a-fe90f7a300f9"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#27df4f81-c854-45de-942a-fe90f7a300f9)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">Xellx's</span>
          </span>{" "}
          plugin base is always growing
        </h2>
        <p className="text-base text-gray-700 dark:text-gray-200 md:text-lg">
          Xellx has a plugin's page which in the future plans to have a market
          place to download plugins for your server.
        </p>
      </div>
      <div className="grid max-w-screen-lg gap-8 row-gap-10 mx-auto lg:grid-cols-2">
        <Entry
          title="Sticky Roles"
          desc="Muted someone and they leave the server? Add the muted role to the sticky roles. A moderator leaves and joins the server to test the verification system? Let sticky roles automaticlly add it back."
          icon={<LightningBoltIcon className="text-indigo-500" width={24} />}
        />
        <Entry
          title="Disable Commands"
          desc="Want to disable certain commands. Just log on to the plugins page on the dashboard and select the command category and click the checkbox."
          icon={<ChatAlt2Icon className="text-indigo-500" width={24} />}
        />
        <Entry
          title="Auto Role"
          desc="Automaticlly adds the specified role to every user that joins the server."
          icon={<FireIcon className="text-indigo-500" width={24} />}
        />
        <Entry
          title="Audit Log"
          desc="Log every time someone modifies something in the Xellx Dashboard and the user that did it. Automaticlly log it to a discord channel. And coming soon enable logs for when someone creates a channel, etc."
          icon={<RssIcon className="text-indigo-500" width={24} />}
        />
      </div>
    </div>
  );
};

export default Feature;
