import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import get_text_color from "@/lib/get_text_color";

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

function get_text_color_pre(color: number) {
  return get_text_color(color, window, localStorage);
}

const CustomSelect = (props: {
  data: any;
  name: string;
  custom: any;
  children: any;
  setSelected: any;
}) => {
  if (props.data === null) {
    return <div></div>;
  }

  const setSelected = props.setSelected;

  return (
    <div>
      <Listbox value={props.data[0]} onChange={setSelected}>
        {({ open }) => (
          <>
            <div className="w-full container mx-auto flex flex-row flex-wrap gap-2 z-50">
              {props.children}
              <Listbox.Button>
                {props.custom}
                <Transition
                  show={open}
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute top-36 w-full h-40 left-0 z-32 mt-1 bg-white dark:bg-gray-800 shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
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
                        {({ selected }) => (
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
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </Listbox.Button>
            </div>
          </>
        )}
      </Listbox>
    </div>
  );
};

export default CustomSelect;
