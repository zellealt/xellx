import React from "react";
import discordGuild from "@/interfaces/discordGuild";
import AuditLogX from "@/modules/Server/AuditLogX";
import Card, { EmptyCard } from "@/original/Cards/Card";
import router from "next/router";
import OpenInBrowserRoundedIcon from "@material-ui/icons/OpenInBrowserRounded";

const Column2 = (props: { guild: discordGuild }) => {
  return (
    <div>
      <EmptyCard
        name={
          <div className="flex flex-row justify-between">
            <div className="lg:w-1/5 sm:w-4/12">Audit Log</div>
            <button
              className="transition text-gray-500 bg-white relative items-center px-2 py-2 text-sm font-medium dark:hover:bg-gray-800 dark:bg-gray-900 shadow rounded-full"
              onClick={function () {
                router.push({
                  pathname: "./auditlog",
                  query: { ...router.query },
                });
              }}
            >
              <OpenInBrowserRoundedIcon />
            </button>
          </div>
        }
        content={
          <div>
            <AuditLogX guild={props.guild} />
          </div>
        }
      />
    </div>
  );
};

export default Column2;
