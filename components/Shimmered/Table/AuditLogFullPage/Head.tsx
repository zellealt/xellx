import Text from "@/shimmered/Layout/Text";

const Head = () => (
  <thead className="bg-gray-50 dark:bg-gray-800">
    <tr>
      <th
        scope="col"
        className="px-11 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
      >
        <Text text="Date" />
      </th>
      <th
        scope="col"
        className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
      >
        <Text text="User" />
      </th>
      <th
        scope="col"
        className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
      >
        <Text text="Action" />
      </th>
      <th
        scope="col"
        className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
      >
        <Text text="ID" />
      </th>
    </tr>
  </thead>
);

export default Head;
