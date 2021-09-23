import Portal from "../../hooks/Portal";
import { Transition } from "@headlessui/react";
import React, { useState } from "react";
import { CheckCircleIcon } from "@heroicons/react/outline";

const SnackBar = () => {
  const [show, setShow] = useState(true);

  setTimeout(() => {
    setShow(false);
  }, 5000);

  return (
    <Portal className="alert top-10 right-10 absolute z-50">
      <Transition
        show={show}
        appear={true}
        enter="ease-in-out duration-500 transform"
        enterFrom="-translate-y-10"
        enterTo="-translate-y-0"
        leave="transition-opacity ease-in-out duration-500"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="m-auto">
          <div
            role="alert"
            className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg"
          >
            <div className="p-5">
              <svg
                width="35px"
                viewBox="0 0 66 66"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  className="path"
                  fill="none"
                  strokeWidth="6"
                  strokeLinecap="round"
                  cx="33"
                  cy="33"
                  r="30"
                ></circle>
              </svg>
            </div>
          </div>
        </div>
      </Transition>
    </Portal>
  );
};

export default SnackBar;
