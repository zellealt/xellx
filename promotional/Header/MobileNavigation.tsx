import React, { Fragment } from "react";
import Link from "next/dist/client/link";
import navigation from "./Navigation";
import { useRouter } from "next/router";

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const MobileNavigation = () => {
  const router = useRouter();

  return (
    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
      {navigation.map((item) => (
        <Link key={item.name} href={item.href}>
          <a
            className={classNames(
              router.pathname.includes(item.name.toLowerCase())
                ? "bg-gray-300 dark:bg-gray-800"
                : "bg-gray-50 dark:bg-gray-700",
              "block px-3 py-2 rounded-md text-base font-medium transition hover:bg-gray-200 text-black dark:text-white"
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
  );
};

export default MobileNavigation;
