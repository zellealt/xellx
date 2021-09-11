import discordGuild from "@/interfaces/discordGuild";
import Entry from "@/original/Table/AuditLog/Entry";
import Head from "@/original/Table/AuditLog/Head";
import timeSince from "@/generals/timeSince";
import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import Link from "next/link";
import router from "next/router";

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

  return (
    <div>
      <div className="overflow-x-auto dark:bg-gray-900">
        <div className="inline-block min-w-full overflow-hidden">
          <table className="min-w-full leading-normal">
            <Head />
            <tbody>
              {logs
                .slice(currentPage * 5, currentPage * 5 + 5)
                .map((dataEntry: any) => {
                  return (
                    <Entry
                      key={dataEntry.key}
                      action={dataEntry.action}
                      date={timeSince(new Date(dataEntry.date))}
                      user={dataEntry.user}
                      id={dataEntry.id}
                    />
                  );
                })}
            </tbody>
          </table>
          <div className="flex justify-center">
            <ReactPaginate
              breakLabel={"..."}
              breakClassName={"break-me"}
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
    </div>
  );
};

export default AuditLog;
