import {
  useSession,
  signIn,
  getSession,
  GetSessionOptions,
} from "next-auth/client";
import React from "react";
import Shimmer from "@/shimmered/Shimmer";

export default function UserCard() {
  const [session, loading] = useSession();

  if (!loading) {
    if (!session) {
      return <div></div>;
    } else {
      return (
        <>
          <div className="flex place-items-center gap-5 rounded-md">
            <img src={session.user?.image!} className="h-16 rounded-full" />
            <h3 className="dark:text-white text-lg font-semibold">
              {session.user?.name}
            </h3>
          </div>
        </>
      );
    }
  } else {
    return <div></div>;
  }
}
