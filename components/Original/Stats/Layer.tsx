import PageHeader from "@/original/Layout/PageHeader";
import React from "react";
import WidthCard from "@/original/Cards/WidthCard";
import Spacer from "@/original/Layout/Spacer";
import Cards from "./Cards";
import Seperator from "@/original/Layout/Seperator";
import { useRouter } from "next/router";
import Refresh from "@/original/Buttons/Refresh";

function formatStatus(string: string) {
  const replaced = string.replace("_", " ");
  const makeCapital = replaced.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
    letter.toUpperCase()
  );

  return makeCapital;
}

export default function StatsSkeletonLayer(props: {
  guilds: number;
  statusJson: any;
  globalStatusJson: any;
}) {
  const router = useRouter();
  // Call this function whenever you want to
  // refresh props!
  const refreshData = () => {
    router.replace(router.asPath);
  };

  return (
    <PageHeader
      padding={true}
      fullWidth={false}
      rightContent={
        <div className="float-right">
          <Refresh />
        </div>
      }
      leftTitle="Statistics"
      leftContent={null}
      rightTitle={null}
    >
      <div>
        <div>
          <Cards
            globalStatus={props.globalStatusJson.status}
            guilds={props.guilds}
          />
          <Spacer px={24} />
        </div>
        <div className="p-3 md:p-0">
          <Seperator />
          {props.statusJson.components.map((item: any) => {
            let color;
            if (item.status === "operational") color = "green-400";
            if (item.status === "degraded_performance") color = "yellow-400";
            if (item.status === "partial_outage") color = "yellow-700";
            if (item.status === "major_outage") color = "red-400";
            if (item.status === "under_maintenance") color = "blue-400";
            const status = {
              content: formatStatus(item.status),
              color: color,
            };
            const name = { content: item.name, color: "gray-900" };
            return (
              <div key={item.name}>
                <WidthCard name={name} content={status} />
                <Spacer px={24} />
              </div>
            );
          })}
        </div>
      </div>
    </PageHeader>
  );
}
