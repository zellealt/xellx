import React from "react";
import Button from "@/original/Buttons/Button";

const SignInToDiscord = () => (
  <div>
    <Button
      text="Sign In to Discord"
      onClick={() => window.open("/login", "Data", "height=600,width=400")}
      href=""
      color="indigo"
    />
    <div className="flex justify-center">
      <div className="mt-5 max-w-md text-xs text-gray-600 dark:text-gray-300 sm:text-sm md:text-center">
        By signing in to Xellx you are agreeing to the Privacy Policy and the
        Terms of Service.
      </div>
    </div>
  </div>
);

export default SignInToDiscord;
