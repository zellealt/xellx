import Title from "@/modules/Meta/Title";
import { signIn, useSession } from "next-auth/client";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

export default function Login() {
  const [session, loading] = useSession();
  const router = useRouter();

  if (!loading) {
    if (session) {
      router.push({
        pathname: "/dashboard",
      });
      return <div></div>;
    } else {
      useEffect(() => {
        setTimeout(() => {
          signIn("discord");
        }, 2500);
      }, []);

      return (
        <>
          <Title title="Logging in" />
          <h1>Logging in</h1>
        </>
      );
    }
  } else {
    return <div></div>;
  }
}
