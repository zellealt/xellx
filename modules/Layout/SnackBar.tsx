import Portal from "../../hooks/Portal";
import { Transition } from "@headlessui/react";

const SnackBar = (props: {
  alert: string | boolean;
  alertStatus: string | null;
  alertBool: boolean;
  customClasses: string;
}) => {
  return (
    <Portal className="alert bottom-10 right-10 absolute">
      <Transition
        show={props.alertBool}
        appear={true}
        enter="ease-in-out duration-500 transform"
        enterFrom="translate-y-10"
        enterTo="-translate-y-0"
        leave="transition-opacity ease-in-out duration-500"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div
          className={`z-50 px-4 py-3 leading-normal text-${props.alertStatus}-100 bg-${props.alertStatus}-700 rounded-lg ${props.customClasses} filter drop-shadow-md ring ring-${props.alertStatus}-500 ring-opacity-50`}
          role="alert"
        >
          <p>{props.alert}</p>
        </div>
      </Transition>
    </Portal>
  );
};

export default SnackBar;
