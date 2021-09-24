import Title from "@/modules/Meta/Title";
import Button from "@/original/Buttons/Button";
import FullWidthButton from "@/original/Buttons/FullWidthButton";
import Spinner from "@/original/Loaders/Spinner";
import { signIn, useSession } from "next-auth/client";
import { useRouter } from "next/router";
import XellxPartialBrand from "promotional/Header/XellxPartialBrand";
import React, { useEffect } from "react";
import Card from "@/original/Authentication/Card";

export default function Login() {
  const [session, loading] = useSession();
  const router = useRouter();

  if (!loading) {
    if (session) {
      window.close();
      return <div></div>;
    } else {
      return (
        <>
          <Title title="Logging in" />
          <Card>
            <div>
              <div className="px-2 py-7">
                <h1 className="text-2xl font-bold text-center">
                  Authorization Request
                </h1>
                <p className="text-center text-base">
                  Connect Discord to your Xellx
                </p>
                <div className="flex mt-10 flex-row justify-between px-10">
                  <XellxPartialBrand
                    color="black dark:text-white"
                    height="10"
                  />
                  <div className="dot-flashing mt-4 ml-2"></div>
                  <div>
                    <img
                      src="/Discord-Logo-White.svg"
                      className="h-10 dark-only"
                    />
                    <img
                      src="/Discord-Logo-Black.svg"
                      className="h-10 light-only"
                    />
                  </div>
                </div>
                <p className="text-sm text-center mt-5 mx-5">
                  Access your email, username, and servers
                </p>
              </div>
              <div className="px-5 pb-5 py-10">
                <FullWidthButton
                  color="indigo"
                  text="Next"
                  href=""
                  onClick={() => signIn("discord")}
                />
              </div>
            </div>
          </Card>
        </>
      );
    }
  } else {
    return <div></div>;
  }
}
