import Link from "next/link";
import { useEffect, useState } from "react";
// @ts-ignore
import analyze from "rgbaster";

interface CardProps {
  isNull: null | string;
  icon: string;
  id: number;
  name: string;
  section: any;
}

const ServerCard = (props: CardProps) => {
  const [backgroundColor, setBackgroundColor] = useState("");

  let icon = "";
  if (props.isNull === null) {
    icon = "/default.png";
  } else {
    icon = props.icon;
  }

  useEffect(() => {
    async function fetch() {
      try {
        const result = await analyze(icon);
        setBackgroundColor(result[0].color);
      } catch (err) {
        console.error(err);
      }
    }

    fetch();
  });

  return (
    <div className="overflow-hidden rounded-lg border dark:border-gray-800 transition">
      <div
        className="object-cover h-48 module"
        style={{
          background: backgroundColor,
        }}
      >
        <div className="module-inside">
          <span className="helper"></span>
          <img
            className="align-middle	object-cover h-30 rounded-full m-auto block ring-2 ring-white dark:ring-gray-800 filter drop-shadow-xl"
            src={icon}
            width={128}
            height={128}
            alt="Server Logo"
          />
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
