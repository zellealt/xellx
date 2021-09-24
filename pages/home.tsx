import Title from "@/modules/Meta/Title";
import React, { useEffect, useState } from "react";
import Hero from "promotional/Layout/HeroPromotional";
import Header from "promotional/Header/Header";
import { useSession } from "next-auth/client";
import { useRouter } from "next/router";
import check_session from "@/lib/check_session";
import Feature from "promotional/Layout/Features/Features";
import CTA from "promotional/Layout/CTA/CTA";
import SingleStat from "promotional/Layout/Stats/Single";
import make_request from "@/lib/make_request";
import { DocumentIcon } from "@heroicons/react/outline";
import Footer from "@/original/Layout/Footer/Footer";

export default function Index() {
  const [session, loading] = useSession();
  const router = useRouter();

  const sessioned = check_session(session, loading, "do not redirect");

  if (sessioned === true) {
    useEffect(() => {
      router.push({
        pathname: "/dashboard",
      });
    });

    return <Title title="Dashboard" />;
  } else {
    const [logs, setLogs] = useState("...");

    useEffect(() => {
      make_request(
        `${process.env.NEXT_PUBLIC_APP_URI}/api/xellx/get/logs`
      ).then((result: any) => {
        setLogs(result.logs);
      });
    });

    return (
      <div>
        <Title title="Bot" />
        <Hero />
        <Feature />
        <SingleStat
          number={logs + " Logs"}
          desc={
            logs +
            " logs made on Xellx Dashboard ever. Thats changing the plugins, opening a server for the first time, and more."
          }
          icon={
            <DocumentIcon className="h-8 md:h-12 lg:h-16 text-indigo-500" />
          }
        />
        <CTA />
        <Footer />
      </div>
    );
  }
}
