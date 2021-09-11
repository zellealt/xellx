import Link from "next/link";
import { useRouter } from "next/router";
import React, { Fragment } from "react";

import navigation from "./Navigation";

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const DesktopNavigation = () => {
  const router = useRouter();

  return (
    <div className="hidden md:block">
      <div className="ml-10 flex items-baseline space-x-4">
        {navigation.map((item) => (
          <Link key={item.href} href={item.href}>
            <a
              key={item.name}
              className={classNames(
                router.pathname.includes(item.name.toLowerCase())
                  ? "border-black dark:border-white"
                  : "border-transparent",
                "text-black dark:text-white px-3 py-2 text-sm font-medium transition border-b-2 pb-4 mt-4"
              )}
              aria-current={
                router.pathname.includes(item.name.toLowerCase())
                  ? "page"
                  : undefined
              }
            >
              {item.name}
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DesktopNavigation;
