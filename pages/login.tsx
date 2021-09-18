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
          <div className="dark:bg-gray-900 bg-white opacity-75 dark:opacity-75 z-50 fixed w-full h-full top-0 left-0 flex justify-center place-items-center">
            <div className="dark:bg-gray-800 bg-white flex justify-center place-items-center py-5 px-10 rounded-2xl shadow-2xl">
              <Spinner />
              <h1 className="mt-2 ml-10 font-semibold">Signing you in</h1>
            </div>
          </div>
        </>
      );
    }
  } else {
    return <div></div>;
  }
}
