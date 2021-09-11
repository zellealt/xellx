import React from "react";
import FullWidthButton from "@/shimmered/Buttons/FullWidthButton";

const ButtonLayout = (props: { buttons: any }) => {
  const buttons = props.buttons.filter((entry: any) => (entry ? true : false));
  return (
    <div>
      {buttons.map((entry: { text: string }) => {
        return (
          <div key={entry.text}>
            <FullWidthButton text={entry.text} />
          </div>
        );
      })}
    </div>
  );
};
export default ButtonLayout;
