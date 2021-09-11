import { Dialog } from "@headlessui/react";
import { ExclamationIcon } from "@heroicons/react/solid";
import SecurityIcon from "@material-ui/icons/SecurityRounded";
import React from "react";

const Title = (props: { title: string | any; icon: any; desc: string }) => {
  return (
    <div className="flex-1">
      <div className="m-auto flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100 sm:h-10 sm:w-10">
        {props.icon}
      </div>
      <div className="text-center sm:mt-0 sm:text-left">
        <Dialog.Title
          as="h3"
          className="mt-2 text-lg text-center leading-6 font-medium text-gray-900 dark:text-white"
        >
          {props.title}
        </Dialog.Title>
        <div className="mt-2">
          <p className="text-sm text-center text-gray-500">{props.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Title;
