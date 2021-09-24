import discordGuild from "@/interfaces/discordGuild";
import Entry from "@/shimmered/Table/AuditLogFullPage/Entry";
import Head from "@/shimmered/Table/AuditLogFullPage/Head";
import timeSince from "@/generals/timeSince";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import Log from "@/shimmered/Feeds/Log";

const AuditLogFullPage = () => {
  let logs = [
    {
      id: 1241739169,
      user: "Shimmered",
      action: "This is a",
      date: "9 minutes ago",
    },
    {
      id: 1141739169,
      user: "Shimmered",
      action: "This is a shimmered action 12346",
      date: "6 seconds ago",
    },
    {
      id: 9741739169,
      user: "Shimmered",
      action: "This is a shimmered",
      date: "2 months ago",
    },
    {
      id: 8741739169,
      user: "Shimmered",
      action: "This is a shimm5",
      date: "7 years ago",
    },
    {
      id: 7741739169,
      user: "Shimmered",
      action: "This is a shimmered action",
      date: "3 hoursago",
    },
    {
      id: 6741739169,
      user: "Shimmered",
      action: "This is a shimmer",
      date: "1 hour ago",
    },
    {
      id: 5741739169,
      user: "Shimmered",
      action: "This is mered action",
      date: "234 minutes ago",
    },
    {
      id: 4741739169,
      user: "Shimmered",
      action: "This is a shimme465",
      date: "978 minutes ago",
    },
    {
      id: 3741739169,
      user: "Shimmered",
      action: "This ied action",
      date: "456 minutes ago",
    },
    {
      id: 2741739169,
      user: "Shimmered",
      action: "Thisred action456",
      date: "987 minutes ago",
    },
    {
      id: 1741739169,
      user: "Shimmered",
      action: "This is a shimmered action 45645",
      date: "23 minutes ago",
    },
  ];

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

              let seperator: boolean = true;

              if (mapCount === logs.length) {
                seperator = false;
              }

              return (
                <Log
                  seperator={seperator}
                  title={dataEntry.action}
                  key={dataEntry.id}
                  date={dataEntry.date}
                  user={dataEntry.user}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default AuditLogFullPage;