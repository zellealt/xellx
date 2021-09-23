import React, { Fragment } from "react";
import Link from "next/dist/client/link";
import navigation from "../Navigation";
import { useRouter } from "next/router";

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const Item = (props: { item: { href: string; name: string }; router: any }) => (
  <Link key={props.item.name} href={props.item.href}>
    <a
      className={classNames(
        props.router.pathname.includes(props.item.name.toLowerCase())
          ? "bg-gray-300 dark:bg-gray-800"
          : "bg-gray-50 dark:bg-gray-700",
        "block px-3 py-2 rounded-md text-base font-medium transition hover:bg-gray-200 text-black dark:text-white"
      )}
      aria-current={
        props.router.pathname.includes(props.item.name.toLowerCase())
          ? "page"
          : undefined
      }
    >
      {props.item.name}
    </a>
  </Link>
);

const MobileNavigation = (props: { session: any }) => {
  const router = useRouter();

  return (
    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
      {navigation.map((item) => {
        const NavItem = <Item key={item.href} item={item} router={router} />;
        let result;
        item.dashboard && props.session && (result = NavItem);
        item.home && !props.session && (result = NavItem);

        if (!item.dashboard && !item.home) result = NavItem;

        return result;
      })}
    </div>
  );
};

export default MobileNavigation;
