import Card, { EmptyCard } from "@/original/Cards/Card";
import AuditLog from "@/shimmeredModules/Server/AuditLog/AuditLog";
import router from "next/router";
import React from "react";
import OpenInBrowserRoundedIcon from "@material-ui/icons/OpenInBrowserRounded";

const Column2 = () => {
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
      >
        <div>
          <AuditLog />
        </div>
      </EmptyCard>
    </div>
  );
};

export default Column2;
