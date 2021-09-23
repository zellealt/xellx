/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useEffect, useRef, useState } from "react";
import { Disclosure, Menu, Transition, Dialog } from "@headlessui/react";
import { MenuIcon, XIcon, ExclamationIcon } from "@heroicons/react/outline";
import { useSession, signOut } from "next-auth/client";
import XellxPartialBrand from "./XellxPartialBrand";
import DesktopNavigation from "./DesktopNavigation";
import MobileNavigation from "./MobileNavigation";
import Portal from "@/hooks/Portal";
import Modal from "@/modules/Modals/Modal";
import Logout from "@/modules/Modals/Logout";
import React from "react";
import Link from "next/link";

const classNames = (...classes: any) => {
  return classes.filter(Boolean).join(" ");
};

function Header() {
  const [open, setOpen] = useState(false);

  const [session, loading]: any = useSession();

  const ref = React.createRef();

  if (!loading) {
    console.log("loaded");
    if (session) {
      console.log("sessioned");
      return (
        <div>
          <Disclosure as="nav" className="bg-gray-100 dark:bg-gray-700 z-50">
            {({ open }) => (
              <>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                      <XellxPartialBrand
                        height="8"
                        color="black dark:text-white"
                      />
                      <DesktopNavigation />
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-4 flex items-center md:ml-6">
                        {/* Profile dropdown */}
                        <Menu as="div" className="ml-3 relative z-50">
                          {({ open }) => (
                            <>
                              <div>
                                <Menu.Button className="filter drop-shadow-lg hover:drop-shadow-xl transition max-w-xs bg-indigo-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                  <span className="sr-only">
                                    Open user menu
                                  </span>
                                  <img
                                    className="h-8 w-8 rounded-full"
                                    src={session.user.image}
                                    alt=""
                                  />
                                </Menu.Button>
                              </div>
                              <Portal className="profile-dropdown">
                                <div className="top-12 right-7 navl:ml-380 navl:inset-x-1/2 navl:items-center absolute z-50">
                                  <Transition
                                    show={open}
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                  >
                                    <Menu.Items
                                      static
                                      className="dark:bg-gray-900 origin-top-right absolute z-50 right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                                    >
                                      <Menu.Item>
                                        {({ active }) => (
                                          <div>
                                            <a
                                              className={classNames(
                                                active
                                                  ? "bg-gray-100 dark:bg-gray-800"
                                                  : "",
                                                "block px-4 py-2 text-sm text-gray-700 dark:text-white"
                                              )}
                                            >
                                              <img
                                                className="h-10 w-10 rounded-full inline"
                                                src={session.user.image}
                                                alt=""
                                              />
                                              <div className="ml-3 inline">
                                                {session.user.name}
                                              </div>
                                            </a>
                                          </div>
                                        )}
                                      </Menu.Item>
                                      <Link href="/settings">
                                        <Menu.Item>
                                          {({ active }) => (
                                            <a
                                              className={classNames(
                                                active
                                                  ? "bg-gray-100 dark:bg-gray-800"
                                                  : "",
                                                "block px-4 py-2 text-sm text-gray-700 dark:text-white"
                                              )}
                                            >
                                              Settings
                                            </a>
                                          )}
                                        </Menu.Item>
                                      </Link>

                                      <Menu.Item>
                                        {({ active }) => (
                                          <a
                                            onClick={() => setOpen(true)}
                                            className={classNames(
                                              active
                                                ? "bg-gray-100 dark:bg-gray-800"
                                                : "",
                                              "block px-4 py-2 text-sm text-gray-700 dark:text-white"
                                            )}
                                          >
                                            Log out
                                          </a>
                                        )}
                                      </Menu.Item>
                                    </Menu.Items>
                                  </Transition>
                                </div>
                              </Portal>
                            </>
                          )}
                        </Menu>
                      </div>
                    </div>
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
                  <MobileNavigation />
                  <div className="pt-4 pb-3 border-t dark:bg-gray-900 border-gray-700 text-black dark:text-white">
                    <div className="flex items-center px-5">
                      <div className="flex-shrink-0">
                        <img
                          className="h-10 w-10 rounded-full"
                          src={session.user.image}
                          alt=""
                        />
                      </div>
                      <div className="ml-3">
                        <div className="text-base font-medium leading-none">
                          {session.user.name}
                        </div>
                      </div>
                    </div>
                    <div className="mt-3 px-2 space-y-1">
                      <Link href="/settings">
                        <div className="transition block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-200 dark:hover:bg-gray-800">
                          Settings
                        </div>
                      </Link>
                      <a
                        onClick={() => setOpen(true)}
                        className="transition block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-200 dark:hover:bg-gray-800"
                      >
                        Log out
                      </a>
                    </div>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>

          <Modal
            ref={ref}
            content={
              <Logout
                ref={ref}
                setOpen={setOpen}
                signOut={() => {
                  signOut();
                }}
              />
            }
            setOpen={setOpen}
            open={open}
          />
        </div>
      );
    } else {
      return <div></div>;
    }
  } else {
    return <div></div>;
  }
}

export default Header;
