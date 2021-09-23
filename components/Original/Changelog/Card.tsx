import Card from "@/original/Cards/Card";
import React from "react";

const Cards = (props: { cards: any[] }) => {
  return (
    <div>
      {props.cards.map((entry: { name: any; categorys: any[] }) => (
        <Card
          key={entry.name}
          xellxImage={true}
          name={entry.name}
          content={
            <div className="space-y-10 flex gap-16">
              {entry.categorys.map((category) => (
                <div key={entry.name}>
                  <h1 className="text-lg font-semibold">{category.name}</h1>
                  <ul className="list-disc text-sm font-light space-y-3">
                    {category.subCategory?.map(
                      (subCategory: { name: any; listItem: any[] }) => (
                        <div key={entry.name}>
                          <p className="mt-3 font-medium text-base">
                            {subCategory.name}
                          </p>
                          <ul className="list-disc text-sm font-light">
                            {subCategory.listItem.map((listItem) => (
                              <li key={entry.name}>{listItem}</li>
                            ))}
                          </ul>
                        </div>
                      )
                    )}
                  </ul>
                </div>
              ))}
            </div>
          }
        />
      ))}
    </div>
  );
};

export default Cards;
