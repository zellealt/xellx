import React from "react";
import Link from "next/link";
const Button = (props: { text: string; color: string; href: string }) => {
  return (
    <Link href={props.href}>
      <button
        className={`text-white px-3 py-2 text-sm font-medium transition duration-700 rounded-md bg-${props.color}-500 hover:bg-${props.color}-600 shadow-md focus:ring-${props.color}-500 focus:ring-offset-${props.color}-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ease-in`}
      >
        {props.text}
      </button>
    </Link>
  );
};

export default Button;
