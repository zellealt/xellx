import React from "react";
import Cards from "../Card";

const Version = () => {
  return (
    <Cards
      cards={[
        {
          name: "Alpha 0.0.2",
          categorys: [
            {
              name: "Dashboard",
              subCategory: [
                {
                  name: "General",
                  listItem: [
                    "Added dark & light theme",
                    "Added statistics page linking to the Xellx StatusPage",
                  ],
                },
                {
                  name: "Servers",
                  listItem: ["Added audit log", "Added settings"],
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
                      Added home page{" "}
                      <span className="italic text-gray-200 font-extralight">
                        ( with floating image ( only chrome supported ) )
                      </span>
                    </span>,
                    "Added all the APIs to make the headers switch",
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
