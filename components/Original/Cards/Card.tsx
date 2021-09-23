import Link from "next/link";
import XellxPartialBrand from "../Layout/Header/XellxPartialBrand";

interface CardProps {
  name?: any;
  content: any;
  xellxImage?: any;
}

const Card = (props: CardProps) => {
  return (
    <div className="overflow-hidden rounded-lg border dark:border-gray-800">
      <div className="px-6 py-4">
        <h4 className="mb-3 text-xl font-semibold tracking-tight text-gray-800 dark:text-white flex gap-2">
          {props.xellxImage && (
            <span className="mt-0.5">
              <XellxPartialBrand height="5" color="black dark:text-white" />
            </span>
          )}
          {props.name}
        </h4>
        <div className="leading-normal">{props.content}</div>
      </div>
    </div>
  );
};

export const EmptyCard = (props: CardProps) => {
  return (
    <div className="overflow-hidden rounded-lg border dark:border-gray-800">
      <div>
        <h4 className="px-6 py-4 text-xl font-semibold tracking-tight text-gray-800 bg-gray-50 dark:bg-gray-800 dark:text-white">
          {props.name}
        </h4>
        <div className="leading-normal">{props.content}</div>
      </div>
    </div>
  );
};

export default Card;
