import Custom from "@/original/Error/Custom";
import React from "react";

function Error({ statusCode }: any) {
  return <Custom code={statusCode} />;
}

Error.getInitialProps = ({ res, err }: any) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
