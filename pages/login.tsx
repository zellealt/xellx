import Title from "@/modules/Meta/Title";
import { signIn } from "next-auth/client";
import React, { useEffect } from "react";

export default function Login() {
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
