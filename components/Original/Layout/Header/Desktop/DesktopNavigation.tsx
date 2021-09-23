import Link from "next/link";
import { Router, useRouter } from "next/router";
import React, { Fragment } from "react";
import { UrlObject } from "url";

import navigation from "../Navigation";

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const Item = (props: { item: { href: string; name: string }; router: any }) => (
  <Link key={props.item.href} href={props.item.href}>
    <a
      key={props.item.name}
      className={classNames(
        props.router.pathname.includes(props.item.name.toLowerCase())
          ? "border-black dark:border-white"
          : "border-transparent",
        "text-black dark:text-white px-3 py-2 text-sm font-medium transition border-b-2 pb-4 mt-4"
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

const DesktopNavigation = (props: { session: any }) => {
  const router = useRouter();

  return (
    <div className="hidden md:block">
      <div className="ml-10 flex items-baseline space-x-4">
        {navigation.map((item) => {
          const NavItem = <Item key={item.href} item={item} router={router} />;
          let result;
          item.dashboard && props.session && (result = NavItem);
          item.home && !props.session && (result = NavItem);

          if (!item.dashboard && !item.home) result = NavItem;

          return result;
        })}
      </div>
    </div>
  );
};

export default DesktopNavigation;
