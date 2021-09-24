import Link from "next/link";
import React from "react";
import NavigateNextRoundedIcon from "@material-ui/icons/NavigateNextRounded";

const ChipWithLinkText = (props: {
  link: string;
  chipText: string;
  text: string;
}) => {
  return (
    <div className="space-x-3 text-center">
      <span className="uppercase text-indigo-600 bg-indigo-100 dark:bg-gray-800 text-sm rounded py-1 px-2 font-semibold">
        {props.chipText}
      </span>
      <span className="text-indigo-600 text-sm font-semibold">
        <Link href={props.link}>
          <span className="space-x-3 cursor-pointer">
            {props.text}
            <NavigateNextRoundedIcon className="text-indigo-600 mb-0.5" />
          </span>
        </Link>
      </span>
    </div>
  );
};

export default ChipWithLinkText;
