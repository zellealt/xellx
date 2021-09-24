import React from "react";
import Cards from "../Card";

const Version = () => {
  return (
    <Cards
      cards={[
        {
          name: "Latest Alpha 0.0.4",
          categorys: [
            {
              name: "Dashboard",
              subCategory: [
                {
                  name: "General",
                  listItem: [
                    "Server Cards updated to have background blur and fallback characters.",
                  ],
                },
                {
                  name: "Servers",
                  listItem: [
                    "Audit logs on the overview & audit log page has a new UI.",
                    "Added audit log shimmer to overview page.",
                  ],
                },
              ],
            },
            {
              name: "Promotional",
              subCategory: [
                {
                  name: "",
                  listItem: [
                    "Entire new page revamp with a new: hero, features, single statistic and a call to action.",
                    "Added a footer",
                  ],
                },
              ],
            },
            {
              name: "Development",
              subCategory: [
                {
                  name: "",
                  listItem: [
                    "Cleaned the _app.tsx codebase.",
                    "Changed the codebase for children on components.",
                    "Free Global API for the global logs added.",
                    "Updated logs database prisma schema",
                  ],
                },
              ],
            },
          ],
        },
      ]}
    />
  );
};

export default Version;
