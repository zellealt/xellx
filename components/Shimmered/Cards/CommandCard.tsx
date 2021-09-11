import FullWidthButton from "@/original/Buttons/FullWidthButton";
import Toggle from "@/original/Forms/Toggle";
import Button from "@/original/Buttons/Button";
import React from "react";
import ButtonLayout from "@/shimmered/Buttons/ResponsiveCard/ButtonLayout";
import Shimmer from "../Shimmer";
import Text from "../Layout/Text";

const CommandCard = () => {
  return (
    <div className="w-full h-60 rounded-lg border relative dark:border-gray-800">
      <div className="px-6 py-4">
        <div className="m-auto mb-3 flex items-center justify-center h-12 w-12 rounded-full sm:h-10 sm:w-10">
          <Shimmer width="full" height="full" rounded="full" />
        </div>
        <h4 className="text-xl text-center font-semibold tracking-tight dark:text-gray-100 text-gray-800 flex flex-row justify-center">
          <Text text="Lorem Ipsum" />
        </h4>
        <div className="leading-normal text-center dark:text-gray-100">
          <Text text="Lorem Ipsum Lorem Ipsum Lorem Ipsum" />
        </div>
      </div>
      <div className="px-6 py-4 absolute w-full bottom-0">
        <ButtonLayout
          buttons={[
            {
              text: "Commands",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default CommandCard;
