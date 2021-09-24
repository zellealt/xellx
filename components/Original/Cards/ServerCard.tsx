import Link from "next/link";
import { useEffect, useState } from "react";

interface CardProps {
  isNull: null | string;
  icon: string;
  id: number;
  name: string;
  section: any;
}

const ServerCard = (props: CardProps) => {
  let icon = props.icon;
  let style = {};

  if (props.isNull === null) {
    style = {};
  } else {
    style = {
      backgroundImage: `url(${icon})`,
    };
  }

  return (
    <div className="rounded-lg border dark:border-gray-800 transition">
      <div className="overflow-hidden rounded-lg">
        <div className="object-cover h-48 module" style={style}>
          <div className="module-inside">
            <span className="helper"></span>
            {props.isNull ? (
              <img
                className="align-middle	object-cover h-30 rounded-full m-auto block ring-2 ring-white filter drop-shadow-xl"
                src={icon}
                width={128}
                height={128}
                alt="Server Logo"
              />
            ) : (
              <h2
                style={{
                  width: 128,
                  height: 128,
                }}
                className="align-middle	object-cover h-30 rounded-full m-auto block ring-2 ring-white dark:ring-gray-800 filter drop-shadow-xl text-3xl font-black"
              >
                <span className="center">{props.name.charAt(0)}</span>
              </h2>
            )}
          </div>
        </div>
      </div>
      <div className="px-6 py-4 z-50">
        <h4 className="mb-3 text-xl font-semibold tracking-tight text-gray-800 dark:text-white">
          {props.name}
        </h4>
        <div className="leading-normal">{props.section}</div>
      </div>
    </div>
  );
};

export default ServerCard;
