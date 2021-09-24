import PageHeader from "@/original/Layout/PageHeader";
import React from "react";
import Shimmer from "@/shimmered/Shimmer";
import Cards from "./Cards";
import Spacer from "@/original/Layout/Spacer";
import Seperator from "@/original/Layout/Seperator";
import Refresh from "@/original/Buttons/Refresh";
import WidthCard from "@/original/Cards/WidthCard";

const SampleCard = (props: { name: any; content: any }) => {
  return (
    <div>
      <WidthCard name={props.name} content={props.content} />
      <Spacer px={24} />
    </div>
  );
};

export default function StatsShimmeredLayer1() {
  const shimmerPromoObject = {
    content: <Shimmer rounded="sm" width={44} height={7} />,
    color: "gray-200",
  };
  const shimmerDashObject = {
    content: <Shimmer rounded="sm" width={40} height={7} />,
    color: "gray-200",
  };
  const shimmerShortObject = {
    content: <Shimmer rounded="sm" width={36} height={7} />,
    color: "gray-200",
  };
  const shimmerBotObject = {
    content: <Shimmer rounded="sm" width={32} height={7} />,
    color: "gray-200",
  };

  const shimmerOperationalObject = {
    content: <Shimmer rounded="sm" width={36} height={7} />,
    color: "gray-200",
  };
  const shimmerOutageObject = {
    content: <Shimmer rounded="sm" width={44} height={7} />,
    color: "gray-200",
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
          <Cards />
          <Spacer px={24} />
        </div>
        <div className="p-3 md:p-0">
          <Seperator />
          <SampleCard name={shimmerPromoObject} content={shimmerOutageObject} />
          <SampleCard
            name={shimmerDashObject}
            content={shimmerOperationalObject}
          />
          <SampleCard
            name={shimmerShortObject}
            content={shimmerOperationalObject}
          />
          <SampleCard
            name={shimmerBotObject}
            content={shimmerOperationalObject}
          />
        </div>
      </div>
    </PageHeader>
  );
}
