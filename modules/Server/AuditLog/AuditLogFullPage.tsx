import discordGuild from "@/interfaces/discordGuild";
import Entry from "@/original/Table/AuditLogFullPage/Entry";
import Head from "@/original/Table/AuditLogFullPage/Head";
import timeSince from "@/generals/timeSince";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import ConvertLogIcon from "@/hooks/ConvertLogIcon";
import Log from "@/original/Feeds/Log";
import { render } from "react-dom";
import Markdown from "markdown-to-jsx";

const AuditLogFullPage = (props: { guild: discordGuild }) => {
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
  const [entryCount, setEntryCount] = useState(
    Math.round(window.innerHeight / 120)
  );

  useEffect(() => {
    window.addEventListener("resize", function () {
      setEntryCount(Math.round(window.innerHeight / 120));
    });
  });
  let mapCount: number = 0;

  return (
    <div>
      <div className="overflow-x-auto dark:bg-gray-900">
        <div>
          {logs
            .slice(
              currentPage * entryCount,
              currentPage * entryCount + entryCount
            )
            .map((dataEntry: any) => {
              mapCount++;
              let itemsPerPage =
                currentPage * entryCount -
                currentPage * entryCount +
                entryCount;
              if (currentPage * entryCount + entryCount > logs.length) {
                itemsPerPage =
                  logs.length -
                  currentPage * entryCount +
                  entryCount -
                  entryCount;
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
                  avatar={dataEntry.image}
                  user={dataEntry.user}
                  seperator={seperator}
                  color="bg-indigo-400"
                  key={dataEntry.key}
                  title={<Markdown>{dataEntry.action}</Markdown>}
                  date={timeSince(new Date(dataEntry.date))}
                />
              );
            })}
          <div className="flex justify-center">
            <ReactPaginate
              breakLabel={"..."}
              breakClassName={
                "transition bg-white text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 text-sm font-medium dark:hover:bg-gray-800 dark:bg-gray-900"
              }
              pageCount={logs.length / entryCount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={entryCount}
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
    </div>
  );
};

export default AuditLogFullPage;
