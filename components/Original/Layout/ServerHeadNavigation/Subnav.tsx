import Link from "next/link";
import { useRouter } from "next/router";
import DesktopNavigation from "./DesktopNavigation";
import MobileNavigation from "./MobileNavigation";
import React, { Fragment } from "react";
import { Disclosure, Transition } from "@headlessui/react";
import { XIcon, MenuIcon } from "@heroicons/react/solid";

const Subnav = (props: { content: any; padding: boolean }) => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <Disclosure as="nav" className="bg-gray-100 dark:bg-gray-800 z-50">
        {({ open }) => (
          <>
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                <div className="flex items-center">
                  <DesktopNavigation />
                </div>
              </div>
            </div>
          </>
        )}
      </Disclosure>
      <div className={props.padding ? "mx-auto px-4 sm:px-6 lg:px-8 mt-5" : ""}>
        {props.content}
      </div>
    </div>
  );
};

export default Subnav;
