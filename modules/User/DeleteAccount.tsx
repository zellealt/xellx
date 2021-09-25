import React, { Fragment, useEffect, useState } from "react";
import discordGuild from "@/interfaces/discordGuild";
import Button from "@/original/Buttons/Button";
import Custom from "@/modules/Modals/Custom";
import Modal from "../Modals/Modal";
import Portal from "@/hooks/Portal";
import Spinner from "@/original/Loaders/Spinner";
import { useSession } from "next-auth/client";
import router from "next/router";
import { Transition } from "@headlessui/react";
import make_request from "@/lib/make_request";
function eraseCookie(name: string) {
  document.cookie = name + "=; Max-Age=0";
}
const DeleteAccount = () => {
  const ref = React.createRef();
  const [open, setOpen] = useState(false);
  const [start, setStart] = useState(false);
  const [session, loading]: any = useSession();

  useEffect(() => {
    if (start === true) {
      make_request(`${process.env.NEXT_PUBLIC_APP_URI}/api/remove/account`, {
        Authorization: session?.user.accessToken,
      })
        .then(function (response) {
          eraseCookie("next-auth.callback-url");
          eraseCookie("next-auth.csrf-token");
          eraseCookie("next-auth.session-token");

          localStorage.clear();
          sessionStorage.clear();

          router.push({
            pathname: "/",
          });
        })
        .catch(function (err) {
          console.log("Fetch Error :-S", err);
        });
    }
  }, [start]);

  return (
    <div>
      <Button
        color="red"
        text="Delete Account"
        href=""
        onClick={() => setOpen(true)}
      />
      <Modal ref={ref} setOpen={setOpen} open={open}>
        <Custom
          color="red"
          title="Are you sure?"
          desc="This is irreversible and deletes every trace (except logs) of you in the database?"
          action="Yes"
          ref={ref}
          setOpen={setOpen}
          onClick={() => {
            setOpen(false);
            setStart(true);
          }}
        />
      </Modal>
      <Portal>
        <Transition
          show={start}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="dark:bg-gray-900 bg-white opacity-75 dark:opacity-75 z-50 fixed w-full h-full top-0 left-0 flex justify-center place-items-center">
            <div className="bg-white dark:bg-gray-800 flex justify-center place-items-center py-5 px-10 rounded-2xl shadow-2xl">
              <Spinner />
              <h1 className="mt-2 ml-10 font-semibold">Deleting Account</h1>
            </div>
          </div>
        </Transition>
      </Portal>
    </div>
  );
};

export default DeleteAccount;
