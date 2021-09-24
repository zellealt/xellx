const Log = (props: {
  seperator: boolean;
  icon: any;
  color: string;
  title: any;
  date: string;
  user: string;
  avatar: string;
}) => {
  return (
    <div className="flex justify-between space-x-3">
      <div className="flex justify-between space-x-3">
        <div>
          <div
            className={`${props.color} rounded-full w-10 h-10 flex justify-center items-center`}
          >
            {props.icon}
          </div>

          {props.seperator && (
            <div className="flex justify-center">
              <div className="bg-gray-500 h-5 w-0.5 my-3"></div>
            </div>
          )}
        </div>
        <div>
          <div className="flex items-center gap-1">
            <img src={props.avatar} className="h-5 rounded-full" />
            <p className="text-gray-600 dark:text-gray-300 text-sm font-light">
              {props.user}
            </p>
          </div>

          <p className="text-gray-600 dark:text-gray-300">{props.title}</p>
        </div>
      </div>

      <p className="text-gray-500 font-medium pt-2">{props.date}</p>
    </div>
  );
};

export default Log;
