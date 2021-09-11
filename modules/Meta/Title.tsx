import Head from "next/head";
import React from "react";

const Title = (props: { title: string }) => {
  return (
    <Head>
      <title>{props.title}</title>
    </Head>
  );
};

export default Title;
