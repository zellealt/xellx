import Entry from "./Entry";

const CategorySideBar = (props: {
  children: any;
  category: string;
  categorys: string[];
}) => {
  return (
    <div className="flex pr-10 pl-10 pt-5">
      <div className="w-36 space-y-2 p-3 dark:bg-gray-800 bg-gray-100 rounded-lg">
        <h2 className="text-xl text-center font-bold">Categorys</h2>
        {props.categorys.map((entry) => (
          <Entry
            key={entry}
            entry={entry}
            link={"/commands/" + entry.toLowerCase()}
            active={props.category.toLowerCase().includes(entry.toLowerCase())}
          />
        ))}
      </div>
      <div className="w-full ml-5">{props.children}</div>
    </div>
  );
};

export default CategorySideBar;
