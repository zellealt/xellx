import Link from "next/link";

const RoundActionBtn = (props: { svg: any; link: any; onClick: any }) => {
  return (
    <Link href={props.link}>
      <button
        onClick={props.onClick}
        type="button"
        className="py-2 px-4 flex justify-center items-center  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  w-12 h-12 rounded-lg "
      >
        {props.svg}
      </button>
    </Link>
  );
};

export default RoundActionBtn;
