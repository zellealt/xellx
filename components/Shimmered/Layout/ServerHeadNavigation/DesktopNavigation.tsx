import Link from "next/link";
import { useRouter } from "next/router";
import React, { Fragment } from "react";

import navigation from "@/original/Layout/ServerHeadNavigation/Navigation";

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const DesktopNavigation = (props: { currentPage: string }) => {
  const router = useRouter();

  return (
    <div>
      <div className="md:flex md:items-baseline md:space-x-4">
        {navigation.map((item) => (
          <button key={item.key} onClick={item.href}>
            <a
              key={item.name}
              className={classNames(
                item.key.includes(props.currentPage.toLowerCase())
                  ? "border-black dark:border-indigo-300"
                  : "border-transparent",
                "text-black dark:text-indigo-300 px-3 py-2 text-sm font-medium transition border-b-2 pb-5 mt-4"
              )}
              aria-current={
                item.key.includes(props.currentPage.toLowerCase())
                  ? "page"
                  : undefined
              }
            >
              {item.name}
            </a>
          </button>
        ))}
      </div>
    </div>
  );
};

export default DesktopNavigation;
