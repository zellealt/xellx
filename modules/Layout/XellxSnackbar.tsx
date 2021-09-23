import Portal from "../../hooks/Portal";
import { Transition } from "@headlessui/react";
import React, { useState } from "react";
import { CheckCircleIcon } from "@heroicons/react/outline";
import { XCircleIcon } from "@heroicons/react/outline";
import { ExclamationIcon } from "@heroicons/react/outline";

const SnackBar = (props: { message: string; status: string | null }) => {
  const [show, setShow] = useState(true);

  setTimeout(() => {
    setShow(false);
  }, 3000);

  let icon;
  let title;

  if (props.status === "success") {
    title = "Successfully updated";
    icon = <CheckCircleIcon height="24" className="text-green-400" />;
  }
  if (props.status === "error") {
    title = "Error while updating";
    icon = <XCircleIcon height="24" className="text-red-400" />;
  }
  if (props.status === "warning") {
    title = "Warning";
    icon = <ExclamationIcon height="24" className="text-yellow-400" />;
  }

  return (
    <Portal className="alert top-10 right-10 absolute z-50">
      <Transition
        show={show}
        appear={true}
        enter="ease-in-out duration-1000 transform"
        enterFrom="-translate-y-40"
        enterTo="-translate-y-0"
        leave="ease-in-out duration-1000 transform"
        leaveFrom="-translate-y-0"
        leaveTo="-translate-y-40"
      >
        <div className="m-auto">
          <div
            role="alert"
            className="bg-gray-100 dark:bg-gray-800 rounded-lg p-3 shadow-lg"
          >
            <div className="flex flex-row">
              <div className="px-2">{icon}</div>
              <div className="ml-2 mr-6">
                <span className="font-semibold text-white">{title}</span>
                <span className="block text-gray-500">{props.message}</span>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </Portal>
  );
};

export default SnackBar;
