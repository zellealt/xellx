import Shimmer from "@/shimmered/Shimmer";
import React from "react";

export default function UserCard() {
  return (
    <>
      <div className="flex place-items-center gap-5">
        <Shimmer height={16} width={16} rounded="full" />
        <Shimmer height={6} width={32} rounded="sm" />
      </div>
    </>
  );
}
