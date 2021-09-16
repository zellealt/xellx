import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import get_text_color from "@/lib/get_text_color";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const Select = (props: {
  data: any;
  name: string;
  selected: any;
  setSelected: any;
}) => {
  function get_text_color_pre(color: number) {
    return get_text_color(color, window, localStorage);
  }

  let selected = props.selected;
  let setSelected = props.setSelected;

  if (props.data === null) {
    return <div></div>;
  }

  return (
    <div>
      <Listbox value={selected} onChange={setSelected}>
        {({ open }) => (
          <>
            <Listbox.Label className="block text-sm font-medium text-gray-700 dark:text-gray-100">
              {props.name}
            </Listbox.Label>
            <div className="mt-1 w-full">
              <Listbox.Button className="relative w-48 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm z-10">
                <span className="flex items-center">
                  <span
                    className="ml-3 block truncate"
                    style={{ color: get_text_color_pre(selected.color) }}
                  >
                    {selected.name}
                  </span>
                </span>
                <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <SelectorIcon
                    className="h-5 w-5 text-gray-400 dark:text-gray-500"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>

              <Transition
                show={open}
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute top-36 w-full h-40 left-0 z-32 mt-1 bg-white dark:bg-gray-800 shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm z-50">
                  {props.data.map((role: any) => (
                    <Listbox.Option
                      key={role.id}
                      style={{
                        color: get_text_color_pre(role.color),
                      }}
                      className={({ active }) =>
                        classNames(
                          active ? "transition bg-indigo-600 text-white" : "",
                          "cursor-default select-none relative py-2 pl-3 pr-9 "
                        )
                      }
                      value={role}
                    >
                      {({ selected, active }) => (
                        <>
                          <div className="flex items-center">
                            <span
                              className={classNames(
                                selected ? "font-semibold" : "font-normal",
                                "ml-3 block truncate"
                              )}
                            >
                              {role.name}
                            </span>
                          </div>

                          {selected ? (
                            <span
                              className={classNames(
                                active ? "text-white" : "",
                                "absolute inset-y-0 right-0 flex items-center pr-4"
                              )}
                            >
                              <CheckIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </>
        )}
      </Listbox>
    </div>
  );
};

export default Select;
