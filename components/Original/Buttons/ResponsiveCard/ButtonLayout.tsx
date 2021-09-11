import React from "react";
import FullWidthButton from "@/original/Buttons/FullWidthButton";

const ButtonLayout = (props: { buttons: any }) => {
  const buttons = props.buttons.filter((entry: any) => (entry ? true : false));
  return (
    <div>
      {buttons.map((entry: { color: string; onClick: any; text: string }) => {
        return (
          <div key={entry.text}>
            <FullWidthButton
              color={entry.color}
              onClick={entry.onClick}
              href={false}
              text={entry.text}
            />
          </div>
        );
      })}
    </div>
  );
};
export default ButtonLayout;
