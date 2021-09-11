import Link from "next/link";

const FullWidthButton = (props: {
  color: string;
  text: string;
  href: string | boolean;
  onClick: any;
}) => {
  return (
    <div>
      {props.href ? (
        <Link href={props.href.toString()}>
          <button
            type="button"
            className={`w-full inline-flex justify-center py-2 px-4 bg-${props.color}-600 hover:bg-${props.color}-700 focus:ring-${props.color}-500 focus:ring-offset-${props.color}-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg`}
          >
            {props.text}
          </button>
        </Link>
      ) : (
        <button
          type="button"
          onClick={props.onClick}
          className={`w-full inline-flex justify-center py-2 px-4 bg-${props.color}-600 hover:bg-${props.color}-700 focus:ring-${props.color}-500 focus:ring-offset-${props.color}-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg`}
        >
          {props.text}
        </button>
      )}
    </div>
  );
};

export default FullWidthButton;
