import Link from "next/link";

const Button = (props: { text: string }) => {
  return (
    <button
      type="button"
      className={`cursor-default animate-pulse bg-gray-200 dark:bg-gray-700 py-2 px-4 text-transparent transition ease-in duration-200 text-center text-base font-semibold rounded-lg`}
    >
      {props.text}
    </button>
  );
};

export default Button;
