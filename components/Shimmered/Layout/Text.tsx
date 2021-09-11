import Link from "next/link";

const Text = (props: { text: string }) => {
  return (
    <a
      className={`cursor-default animate-pulse bg-gray-200 dark:bg-gray-700 transition ease-in duration-200 rounded-lg text-transparent`}
    >
      {props.text}
    </a>
  );
};

export default Text;
