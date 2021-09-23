import Title from "@/modules/Meta/Title";
import Spinner from "@/original/Loaders/Spinner";
import { signIn, useSession } from "next-auth/client";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

export default function Login() {
  const [session, loading] = useSession();
  const router = useRouter();

  if (!loading) {
    if (session) {
      window.close();
      return <div></div>;
    } else {
      useEffect(() => {
        signIn("discord");
      }, []);

      return (
        <>
          <Title title="Logging in" />
        </>
      );
    }
  } else {
    return <div></div>;
  }
}
