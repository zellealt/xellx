import { Transition } from "@headlessui/react";
import React from "react";
import Tooltip from "@/original/Tooltips/Tooltip";
import Link from "next/link";

const User = (props: { optional: boolean }) => {
  return (
    <span>
      <Tooltip
        tooltipText={`${
          props.optional ? "Optional" : "Required"
        } Discord Member`}
      >
        <span
          className={`dark:bg-gray-800 bg-gray-100 p-1 rounded-md cursor-pointer ${
            props.optional ? "opacity-75" : "border border-indigo-600"
          }`}
        >
          @user
        </span>
      </Tooltip>
    </span>
  );
};

export default User;
