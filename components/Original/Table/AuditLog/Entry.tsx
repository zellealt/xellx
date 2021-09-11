const Entry = (props: {
  user: string;
  date: any;
  action: string;
  id: string;
}) => (
  <tr>
    <td className="px-3 py-5 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 text-sm">
      <div className="flex items-center">
        <div className="ml-3">
          <p className="text-gray-900 dark:text-white whitespace-no-wrap">
            {props.date}
          </p>
        </div>
      </div>
    </td>
    <td className="px-5 py-5 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 text-sm">
      <p className="text-gray-900 dark:text-white whitespace-no-wrap">
        {props.user}
      </p>
    </td>
    <td className="px-5 py-5 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 text-sm">
      <p className="text-gray-900 dark:text-white whitespace-no-wrap">
        {props.action}
      </p>
    </td>
    <td className="px-5 py-5 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 text-sm">
      <p className="text-gray-900 dark:text-white whitespace-no-wrap">
        {props.id}
      </p>
    </td>
  </tr>
);

export default Entry;
