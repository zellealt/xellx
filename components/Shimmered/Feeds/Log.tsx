import Text from "../Layout/Text";
import Shimmer from "../Shimmer";

const Log = (props: {
  seperator: boolean;
  title: any;
  date: string;
  user: string;
}) => {
  return (
    <div className="flex justify-between space-x-3">
      <div className="flex justify-between space-x-3">
        <div>
          <div className="flex justify-center items-center">
            <Shimmer rounded="full" height={10} width={10} />
          </div>

          {props.seperator && (
            <div className="flex justify-center">
              <div className="bg-gray-500 h-5 w-0.5 my-3"></div>
            </div>
          )}
        </div>
        <div>
          <div className="flex items-center gap-1">
            <Shimmer rounded="full" height={5} width={5} />
            <p className="text-gray-600 dark:text-gray-300 text-sm font-light">
              <Text text={props.user} />
            </p>
          </div>

          <p className="text-gray-600 dark:text-gray-300">
            <Text text={props.title} />
          </p>
        </div>
      </div>

      <p className="text-gray-500 font-medium pt-2">
        <Text text={props.date} />
      </p>
    </div>
  );
};

export default Log;
