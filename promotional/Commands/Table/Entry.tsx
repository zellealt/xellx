const Entry = (props: {
  name: string;
  command: string;
  description: string;
  usage: any[];
}) => (
  <tr>
    <td className="px-3 py-5 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 text-sm">
      <div className="flex items-center">
        <div className="ml-3">
          <p className="text-gray-900 dark:text-white whitespace-no-wrap">
            {props.name}
          </p>
        </div>
      </div>
    </td>
    <td className="px-5 py-5 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 text-sm">
      <p className="text-gray-900 dark:text-white whitespace-no-wrap">
        {props.description}
      </p>
    </td>
    <td className="px-5 py-5 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 text-sm">
      <p className="text-gray-900 dark:text-white whitespace-no-wrap">
        /{props.command} {props.usage.map((entry: any) => entry)}
      </p>
    </td>
  </tr>
);

export default Entry;
