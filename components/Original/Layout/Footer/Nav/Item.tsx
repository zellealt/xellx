import Link from "next/link";
import React from "react";

const Item = (props: { item: { href: string; name: string } }) => (
  <li>
    <Link key={props.item.href} href={props.item.href}>
      <a className="transition-colors duration-300 text-indigo-50 hover:text-indigo-400">
        {props.item.name}
      </a>
    </Link>
  </li>
);

export default Item;
