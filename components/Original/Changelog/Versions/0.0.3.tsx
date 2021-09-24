import React from "react";
import Cards from "../Card";

const Version = () => {
  return (
    <Cards
      cards={[
        {
          name: "Old Alpha 0.0.3",
          categorys: [
            {
              name: "Dashboard",
              subCategory: [
                {
                  name: "Servers",
                  listItem: [
                    "Updated snackbars",
                    "Updated the entire codebase for the plugins section",
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
                    "Changed the homepage to fit with the dashboard design",
                    "Used the same header for the dashboard and promotional",
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
