import Link from "next/link";
import React, { ReactChild, ReactFragment, ReactPortal } from "react";

const MobileProfile = (props: { session: any; setOpen: any }) => {
  if (props.session === null) {
    return <div></div>;
  }
  return (
    <div className="pt-4 pb-3 border-t dark:bg-gray-900 border-gray-700 text-black dark:text-white">
      <div className="flex items-center px-5">
        <div className="flex-shrink-0">
          <img
            className="h-10 w-10 rounded-full"
            src={props.session?.user.image}
            alt=""
          />
        </div>
        <div className="ml-3">
          <div className="text-base font-medium leading-none">
            {props.session?.user.name}
          </div>
        </div>
      </div>
      <div className="mt-3 px-2 space-y-1">
        <Link href="/settings">
          <div className="transition block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-200 dark:hover:bg-gray-800">
            Settings
          </div>
        </Link>
        <a
          onClick={() => props.setOpen(true)}
          className="transition block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-200 dark:hover:bg-gray-800"
        >
          Log out
        </a>
      </div>
    </div>
  );
};

export default MobileProfile;
