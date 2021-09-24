/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import Portal from "@/hooks/Portal";
import React from "react";
import Link from "next/link";
import ThemeSelection from "@/modules/User/ThemeSelection";

const classNames = (...classes: any) => {
  return classes.filter(Boolean).join(" ");
};

const DesktopProfile = (props: { session: any; setOpen: any }) => {
  if (props.session === null) {
    return <ThemeSelection label={false} />;
  }
  return (
    <div className="hidden md:block">
      <div className="ml-4 flex items-center md:ml-6">
        {/* Profile dropdown */}
        <Menu as="div" className="ml-3 relative z-10">
          {({ open }) => (
            <>
              <div>
                <Menu.Button className="filter drop-shadow-lg hover:drop-shadow-xl transition max-w-xs bg-indigo-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="h-8 w-8 rounded-full"
                    src={props.session?.user?.image}
                    alt=""
                  />
                </Menu.Button>
              </div>
              <Portal className="profile-dropdown">
                <div className="top-12 right-7 navl:ml-380 navl:inset-x-1/2 navl:items-center absolute z-40">
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
                      className="dark:bg-gray-900 origin-top-right absolute z-40 right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                    >
                      <Menu.Item>
                        {({ active }) => (
                          <div>
                            <a
                              className={classNames(
                                active ? "bg-gray-100 dark:bg-gray-800" : "",
                                "block px-4 py-2 text-sm text-gray-700 dark:text-white"
                              )}
                            >
                              <img
                                className="h-10 w-10 rounded-full inline"
                                src={props.session?.user?.image}
                                alt=""
                              />
                              <div className="ml-3 inline">
                                {props.session?.user?.name}
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
                                active ? "bg-gray-100 dark:bg-gray-800" : "",
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
                            onClick={() => props.setOpen(true)}
                            className={classNames(
                              active ? "bg-gray-100 dark:bg-gray-800" : "",
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
  );
};

export default DesktopProfile;
