import React from "react";
import Text from "@/shimmered/Layout/Text";
import Shimmer from "@/shimmered/Shimmer";
export default function UserCard() {
  return (
    <>
      <div className="flex place-items-center gap-5 rounded-md">
        <Shimmer height={20} width={20} rounded="full" />
        <div className="dark:text-white text-3xl font-semibold">
          <Text text="Zelle Bot Testing" />
        </div>
      </div>
    </>
  );
}
