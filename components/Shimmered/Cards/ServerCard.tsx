import Link from "next/link";
import React from "react";
import Shimmer from "@/shimmered/Shimmer";
import FullWidthButton from "@/shimmered/Buttons/FullWidthButton";
import Text from "@/shimmered/Layout/Text";

const ServerCardShimmer = (props: { buttonLayer: boolean }) => {
  return (
    <div className="overflow-hidden rounded-lg border dark:border-gray-800">
      <div className="object-cover module">
        <Shimmer height={48} width="full" rounded="none" />
      </div>
      <div className="px-6 py-4">
        <div className="mb-3 text-xl font-semibold tracking-tight">
          <Text text="Zelle Bot Testing" />
        </div>
        <div className="leading-normal">
          {props.buttonLayer ? (
            <FullWidthButton text="Manage" />
          ) : (
            <div className="flex gap-4">
              <Text text="6 Members - 3 Online" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServerCardShimmer;
