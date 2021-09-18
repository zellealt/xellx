import Link from "next/link";
import React from "react";

const Entry = (props: { entry: string; active: boolean; link: string }) => {
  return (
    <Link href={props.link}>
      <a>
        <div
          className={`transition dark:hover:bg-gray-700 hover:bg-gray-200 text-center font-semibold rounded-lg p-2 mt-3  ${
            props.active ? "dark:bg-gray-600 bg-gray-300" : ""
          }`}
        >
          <span>{props.entry}</span>
        </div>
      </a>
    </Link>
  );
};

export default Entry;
