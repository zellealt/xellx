import { Disclosure } from "@headlessui/react";
import XellxPartialBrand from "./XellxPartialBrand";
import DesktopNavigation from "./Nav/Promotional";
import React from "react";
import XellxLogo from "promotional/Brand/XellxLogo";
import Promotional from "./Nav/Promotional";
import Dashboard from "./Nav/Dashboard";
import Other from "./Nav/Other";

function Footer() {
  return (
    <div className="relative mt-16 bg-indigo-700">
      <svg
        className="absolute top-0 w-full h-6 -mt-5 sm:-mt-10 sm:h-16 text-indigo-700"
        preserveAspectRatio="none"
        viewBox="0 0 1440 54"
      >
        <path
          fill="currentColor"
          d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
        />
      </svg>
      <div className="px-4 pt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
          <div className="md:max-w-md lg:col-span-2">
            <a
              href="/"
              aria-label="Go home"
              title="Xellx"
              className="inline-flex items-center"
            >
              <XellxLogo height="10" color="white" />
            </a>
            <div className="mt-4 lg:max-w-sm">
              <p className="text-sm text-indigo-50">
                Xellx Dashboard is a project started by zelxd{" "}
                <a href="https://zelle.is-a.dev">(zelle.is-a.dev)</a>, at the
                start of August 2021 with just a simple discord bot with 3
                commands.
              </p>
              <p className="mt-4 text-sm text-indigo-50">
                By 14 days later the Xellx Dashboard had been started and has
                been going on since than, (at the time of coding 24/09/21
                (D/M/Y))
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4 list-none">
            <div>
              <p className="font-semibold tracking-wide text-indigo-400">
                Promotional
              </p>
              <Promotional />
            </div>
            <div>
              <p className="font-semibold tracking-wide text-indigo-400">
                Dashboard
              </p>
              <Dashboard />
            </div>
            <div>
              <p className="font-semibold tracking-wide text-indigo-400">
                Other
              </p>
              <Other />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between pt-5 pb-10 border-t border-indigo-200 border-opacity-40 sm:flex-row">
          <p className="text-sm text-gray-100">
            © Copyright 2021 zelxd. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
