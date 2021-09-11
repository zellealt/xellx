import Link from "next/link";

const Button = (props: {
  color: string;
  text: string;
  href: string;
  onClick: any;
}) => {
  return (
    <button
      type="button"
      onClick={props.onClick}
      className={`py-2 px-4  bg-${props.color}-600 hover:bg-${props.color}-700 focus:ring-${props.color}-500 focus:ring-offset-${props.color}-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg`}
    >
      {props.text}
    </button>
  );
};

export default Button;
