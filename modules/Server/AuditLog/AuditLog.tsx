import discordGuild from "@/interfaces/discordGuild";
import Entry from "@/original/Table/AuditLog/Entry";
import Head from "@/original/Table/AuditLog/Head";
import timeSince from "@/generals/timeSince";
import React, { useState } from "react";
import Log from "@/original/Feeds/Log";
import ReactPaginate from "react-paginate";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import Link from "next/link";
import router from "next/router";
import { render } from "react-dom";
import Markdown from "markdown-to-jsx";
import ConvertLogIcon from "@/hooks/ConvertLogIcon";

const AuditLog = (props: { guild: discordGuild }) => {
  let logs = props.guild.logs;
  logs.sort(function (
    a: { date: string | number | Date },
    b: { date: string | number | Date }
  ) {
    const c: any = new Date(a.date);
    const d: any = new Date(b.date);
    return d - c;
  });

  const [currentPage, setCurrentPage] = useState(0);

  let mapCount: number = 0;

  return (
    <div>
      <div className="overflow-x-auto dark:bg-gray-900">
        <div className="p-5">
          {logs
            .slice(currentPage * 5, currentPage * 5 + 5)
            .map((dataEntry: any) => {
              mapCount++;
              let itemsPerPage = currentPage * 5 - currentPage * 5 + 5;
              if (currentPage * 5 + 5 > logs.length) {
                itemsPerPage = logs.length - currentPage * 5 + 5 - 5;
              }

              let seperator: boolean = true;

              if (mapCount === itemsPerPage) {
                seperator = false;
              }

              const Icon = ConvertLogIcon(
                dataEntry.icon,
                "h-5 text-indigo-700"
              );

              return (
                <Log
                  icon={Icon}
                  avatar={dataEntry.user_avatar}
                  user={dataEntry.user_tag}
                  seperator={seperator}
                  color="bg-indigo-400"
                  key={dataEntry.key}
                  title={<Markdown>{dataEntry.message}</Markdown>}
                  date={timeSince(new Date(dataEntry.date_created))}
                />
              );
            })}
        </div>

        <div className="flex justify-center">
          <ReactPaginate
            breakLabel={"..."}
            breakClassName={
              "transition relative inline-flex items-center px-2 py-2 rounded-r-md bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-900"
            }
            pageCount={logs.length / 5}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={(data: any) => setCurrentPage(data.selected)}
            containerClassName={
              "relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
            }
            activeClassName={
              "transition bg-indigo-50 border-gray-600 text-indigo-600 relative inline-flex items-center text-sm font-medium"
            }
            previousLabel={
              <>
                <span className="sr-only">Previous</span>
                <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
              </>
            }
            nextLabel={
              <>
                <span className="sr-only">Next</span>
                <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
              </>
            }
            nextLinkClassName={
              "transition relative inline-flex items-center px-2 py-2 rounded-r-md bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-900"
            }
            previousLinkClassName={
              "transition relative inline-flex items-center px-2 py-2 rounded-l-md bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-900"
            }
            pageClassName={"border-transparent border-t"}
            pageLinkClassName={
              "transition bg-white text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 text-sm font-medium dark:hover:bg-gray-800 dark:bg-gray-900"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default AuditLog;
