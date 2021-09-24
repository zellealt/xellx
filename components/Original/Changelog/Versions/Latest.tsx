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
