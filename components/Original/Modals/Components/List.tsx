import React from "react";
import command from "../../../../interfaces/command";
import Checkbox from "../../Forms/Checkbox";

const List = (props: { data: command[]; change_state: any; state: any }) => {
  return (
    <div>
      <div className="mt-4">
        <div className="list-container">
          {props.data.map((entry) => {
            const databaseEntry = props.state.data.find(
              (x: { id: string }) => x.id === entry.id
            );
            return (
              <div
                key={entry.id}
                className="list-items flex flex-col sm:flex-row items-center justify-between w-full mx-auto border-b dark:border-gray-800 py-4 dark:bg-gray-900 my-1 px-4"
              >
                <div className="flex flex-row items-center space-x-4">
                  <div>
                    <h1 className="tracking-tight dark:text-gray-100">
                      {entry.name}
                    </h1>
                    <p className="text-gray-500 font-light dark:text-gray-300">
                      {entry.desc}
                    </p>
                  </div>
                </div>
                <div className="mt-3">
                  <Checkbox
                    color="indigo"
                    changed={() => {
                      let data = props.state.data;
                      const index = data.findIndex(
                        (element: { id: string }) => {
                          if (element.id == entry.id) {
                            return true;
                          }
                        }
                      );
                      data[index].selected = !data[index].selected;
                      props.change_state(data);
                    }}
                    ifChecked={databaseEntry.selected}
                    text=""
                    name={entry.id}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default List;
