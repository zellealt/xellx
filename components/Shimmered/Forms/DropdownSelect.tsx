import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import get_text_color from "@/lib/get_text_color";

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const Select = (props: { name: string; label: string }) => {
  return (
    <Listbox value={() => null} onChange={() => null}>
      <Listbox.Label>
        <a className="text-sm font-medium bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse text-transparent">
          {props.label}
        </a>
      </Listbox.Label>
      <div className="mt-1 w-full">
        <Listbox.Button className="relative w-48 bg-gray-200 dark:bg-gray-700 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default sm:text-sm animate-pulse">
          <span className="flex items-center">
            <span className="ml-3 block truncate text-transparent">
              {props.name}
            </span>
          </span>
        </Listbox.Button>
      </div>
    </Listbox>
  );
};

export default Select;
