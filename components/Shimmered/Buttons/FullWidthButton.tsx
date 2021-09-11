import Link from "next/link";

const FullWidthButton = (props: { text: string }) => {
  return (
    <div>
      <button
        type="button"
        className={`cursor-default inline-flex justify-center py-2 px-4 text-transparent animate-pulse bg-gray-200 dark:bg-gray-700 w-full transition ease-in duration-200 text-center text-base font-semibold rounded-lg`}
      >
        {props.text}
      </button>
    </div>
  );
};

export default FullWidthButton;
