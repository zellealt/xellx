/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from "@headlessui/react";
import XellxLogo from "../Brand/XellxLogo";
import DesktopNavigation from "./DesktopNavigation";
import React from "react";
import Button from "../Buttons/Button";

function Header() {
  return (
    <div>
      <Disclosure as="nav" className="bg-white dark:bg-gray-900 z-50 shadow-sm">
        <>
          <div className="px-10">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <XellxLogo height="8" color="black dark:text-white" />

                <div className="flex items-center">
                  <DesktopNavigation />
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Button
                  href="/login"
                  color="indigo"
                  text="Login to the Dashboard"
                />
              </div>
            </div>
          </div>
        </>
      </Disclosure>
    </div>
  );
}

export default Header;
