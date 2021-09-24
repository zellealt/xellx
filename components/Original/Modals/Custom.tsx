import React from "react";
import Seperator from "@/original/Layout/Seperator";
import Spacer from "@/original/Layout/Spacer";
import Title from "@/original/Modals/Components/Title";

const Custom = (props: {
  name: string;
  desc: string;
  icon: any;
  children: any;
}) => {
  return (
    <div className="dark:bg-gray-900">
      <Title title={props.name} desc={props.desc} icon={props.icon} />
      <Spacer px={15} />
      <Seperator />
      <Spacer px={5} />
      {props.children}
      <Spacer px={28} />
    </div>
  );
};

export default Custom;
