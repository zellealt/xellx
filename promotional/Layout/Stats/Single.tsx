const Single = (props: {
  icon: any;
  number: number | string;
  desc: string;
}) => (
  <div className="px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-36 lg:py-20">
    <div className="flex flex-col lg:items-center lg:flex-row">
      <div className="flex items-center mb-6 lg:w-1/2 lg:mb-0">
        <div className="flex items-center justify-center w-16 h-16 mr-5 rounded-full bg-indigo-50 dark:bg-gray-800 sm:w-24 sm:h-24 xl:mr-10 xl:w-28 xl:h-28">
          {props.icon}
        </div>
        <h3 className="text-4xl font-extrabold sm:text-5xl xl:text-6xl">
          {props.number.toString()}
        </h3>
      </div>
      <div className="lg:w-1/2">
        <p className="text-gray-800 dark:text-gray-100">{props.desc}</p>
      </div>
    </div>
  </div>
);

export default Single;
