import React from "react";
import Cards from "../Card";

const Version = () => {
  return (
    <Cards
      cards={[
        {
          name: "Alpha 0.0.1",
          categorys: [
            {
              name: "Dashboard",
              subCategory: [
                {
                  name: "General",
                  listItem: [
                    <span>
                      Added Discord Authentication{" "}
                      <span className="italic text-gray-200 font-extralight">
                        ( NextAuth )
                      </span>
                    </span>,
                    "Added server selector page",
                  ],
                },
                {
                  name: "Servers",
                  listItem: ["Added overview", "Added plugins"],
                },
              ],
            },

            {
              name: "Promotional",
              subCategory: [
                {
                  name: "",
                  listItem: [
                    <span>
                      Added commands page{" "}
                      <span className="italic text-gray-200 font-extralight">
                        ( with automatic json file linking )
                      </span>
                    </span>,
                    "Added statistics page linking to the Xellx StatusPage",
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
