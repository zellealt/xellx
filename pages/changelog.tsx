import Card from "@/original/Cards/Card";
import Module from "@/original/Changelog/Module";
import PageHeader from "@/original/Layout/PageHeader";
import React from "react";

const ChangeLog = () => {
  return (
    <PageHeader leftTitle="Changelog" padding={true}>
      <Module />
    </PageHeader>
  );
};

export default ChangeLog;
