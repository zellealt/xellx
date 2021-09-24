/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useEffect, useRef, useState } from "react";
import { Disclosure, Menu, Transition, Dialog } from "@headlessui/react";
import { MenuIcon, XIcon, ExclamationIcon } from "@heroicons/react/outline";
import { useSession, signOut } from "next-auth/client";
import XellxPartialBrand from "./XellxPartialBrand";
import DesktopNavigation from "./Desktop/DesktopNavigation";
import MobileNavigation from "./Mobile/MobileNavigation";
import Portal from "@/hooks/Portal";
import Modal from "@/modules/Modals/Modal";
import Logout from "@/modules/Modals/Logout";
import React from "react";
import Link from "next/link";
import MobileProfile from "./Mobile/Profile";
import DesktopProfile from "./Desktop/Profile";

const classNames = (...classes: any) => {
  return classes.filter(Boolean).join(" ");
};

function Header() {
  const [open, setOpen] = useState(false);

  const [session, loading]: any = useSession();

  const ref = React.createRef();

  if (!loading) {
    return (
      <div>
        <Disclosure
          as="nav"
          className="bg-gray-100 dark:bg-gray-700 z-40 shadow-sm"
        >
          {({ open }) => (
            <>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                  <div className="flex items-center">
                    <XellxPartialBrand
                      height="8"
                      color="black dark:text-white"
                    />
                    <DesktopNavigation session={session} />
                  </div>
                  <DesktopProfile
                    session={session}
                    setOpen={(value: boolean) => setOpen(value)}
                  />
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="bg-gray-200 dark:bg-gray-800 inline-flex items-center justify-center p-2 text-black dark:text-white rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <MenuIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <MobileNavigation session={session} />
                <MobileProfile
                  session={session}
                  setOpen={(value: boolean) => setOpen(value)}
                />
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <Modal ref={ref} setOpen={setOpen} open={open}>
          <Logout
            ref={ref}
            setOpen={setOpen}
            signOut={() => {
              signOut();
            }}
          />
        </Modal>
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default Header;
