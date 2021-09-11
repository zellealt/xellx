const SquareCard = (props: {
  title: any;
  value: any;
  color: string;
  fraction: string;
  mdWidth: string;
}) => {
  return (
    <div
      className={`border dark:border-gray-800 rounded-2xl w-full md:w-${props.mdWidth} p-4 bg-white dark:bg-gray-900`}
    >
      <div className="flex justify-center place-items-center">
        <span className={`bg-${props.color} p-2 h-4 w-4 rounded-full relative`}>
          <span
            className={`animate-ping bg-${props.color} p-2 h-4 w-4 rounded-full absolute top-0 left-0`}
          >
            <div className="text-white h-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
          </span>
        </span>
        <div className="text-md text-gray-700 dark:text-gray-50 ml-2">
          {props.title}
        </div>
      </div>
      <div className="flex flex-col justify-center place-items-center">
        <div className="text-gray-800 text-4xl text-left dark:text-white font-bold my-4">
          {props.value}
        </div>
        <div className="relative w-full h-2 bg-gray-200 dark:bg-gray-800 rounded">
          <div
            className={`absolute top-0 h-2 left-0 rounded bg-${props.color} w-${props.fraction}`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default SquareCard;
