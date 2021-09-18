import Title from "@/modules/Meta/Title";
import React, { useEffect } from "react";
import Hero from "promotional/Layout/HeroPromotional";
import Header from "promotional/Header/Header";
import { useSession } from "next-auth/client";
import { useRouter } from "next/router";
import check_session from "@/lib/check_session";

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
    return (
      <div>
        <Title title="Bot" />
        <Header />
        <Hero />
      </div>
    );
  }
}
