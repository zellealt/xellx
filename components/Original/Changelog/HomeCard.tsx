import Card from "@/original/Cards/Card";
import React from "react";

const Cards = (props: { cards: any[] }) => {
  return (
    <div>
      {props.cards.map((entry: { name: any; categorys: any[] }) => (
        <div key={entry.name} className="space-y-5">
          {entry.categorys.map((category) => (
            <div key={entry.name}>
              <h1 className="text-2xl font-bold border-b border-opacity-30 dark:border-opacity-30 border-gray-600 text-gray-800 dark:text-white dark:border-white min-w-screen-lg w-80">
                {category.name}
              </h1>
              <ul className="list-disc text-sm font-light space-y-3">
                {category.subCategory?.map(
                  (subCategory: { name: any; listItem: any[] }) => (
                    <div key={entry.name}>
                      <p className="mt-3 font-bold text-xl text-gray-800 dark:text-white">
                        {subCategory.name}
                      </p>
                      <ul className="text-sm font-light">
                        {subCategory.listItem.map((listItem) => (
                          <li key={entry.name}>- {listItem}</li>
                        ))}
                      </ul>
                    </div>
                  )
                )}
              </ul>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Cards;
