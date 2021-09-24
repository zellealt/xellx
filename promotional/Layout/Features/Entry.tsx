const Entry = (props: { title: string; desc: string; icon: any }) => (
  <div className="flex flex-col max-w-md sm:mx-auto sm:flex-row">
    <div className="mr-4">
      <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50 dark:bg-gray-800">
        {props.icon}
      </div>
    </div>
    <div>
      <h6 className="mb-3 text-xl font-bold leading-5">{props.title}</h6>
      <p className="mb-3 text-sm text-gray-900 dark:text-gray-100">
        {props.desc}
      </p>
    </div>
  </div>
);

export default Entry;
