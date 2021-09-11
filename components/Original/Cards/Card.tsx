import Link from "next/link";

interface CardProps {
  name: any;
  content: any;
}

const Card = (props: CardProps) => {
  return (
    <div className="overflow-hidden rounded-lg border dark:border-gray-800">
      <div className="px-6 py-4">
        <h4 className="mb-3 text-xl font-semibold tracking-tight text-gray-800 dark:text-white">
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
