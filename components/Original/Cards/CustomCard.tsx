import ButtonLayout from "../Buttons/ResponsiveCard/ButtonLayout";
import EmptyContent from "@/modules/Modals/EmptyContent";
import React from "react";
import discordGuild from "@/interfaces/discordGuild";
import Modal from "@/modules/Modals/Modal";
import Custom from "@/original/Modals/Custom";
import { useSession } from "next-auth/client";
import PeopleRoundedIcon from "@material-ui/icons/PeopleRounded";
import FolderSpecialRoundedIcon from "@material-ui/icons/FolderSpecialRounded";
import AddCircleRoundedIcon from "@material-ui/icons/AddCircleRounded";
interface CardProps {
  name: string;
  short_desc: any;
  long_desc: any;
  guild: discordGuild;
  content: any;
}

const withSession = (Component: any) => (props: any) => {
  const [session, loading] = useSession();

  // if the component has a render property, we are good
  if (Component.prototype.render) {
    return <Component session={session} loading={loading} {...props} />;
  }

  // if the passed component is a function component, there is no need for this wrapper
  throw new Error(
    [
      "You passed a function component, `withSession` is not needed.",
      "You can `useSession` directly in your component.",
    ].join("\n")
  );
};

class CustomCard extends React.Component<
  CardProps,
  {
    open: boolean;
  }
> {
  constructor(props: any) {
    super(props);

    this.state = {
      open: false,
    };
  }

  render() {
    const ref = React.createRef();
    let CommandIcon;
    const classNameIconProps = "h-6 w-6 text-indigo-900";
    if (this.props.name === "Sticky Roles")
      CommandIcon = (
        <PeopleRoundedIcon className={classNameIconProps} aria-hidden="true" />
      );
    if (this.props.name === "Special Channels")
      CommandIcon = (
        <FolderSpecialRoundedIcon
          className={classNameIconProps}
          aria-hidden="true"
        />
      );
    if (this.props.name === "Auto Role")
      CommandIcon = (
        <AddCircleRoundedIcon
          className={classNameIconProps}
          aria-hidden="true"
        />
      );
    return (
      <div className="w-full h-60 rounded-lg border dark:border-gray-800 relative">
        <div className="px-6 py-4">
          <div className="m-auto mb-3 flex items-center justify-center h-12 w-12 rounded-full bg-indigo-300 sm:h-10 sm:w-10">
            {CommandIcon}
          </div>
          <h4 className="text-xl text-center font-semibold tracking-tight dark:text-gray-100 text-gray-800 flex flex-row justify-center">
            {this.props.name}
          </h4>
          <div className="leading-normal text-center dark:text-gray-100">
            {this.props.short_desc}
          </div>
          <Modal
            ref={ref}
            content={
              <EmptyContent
                ref={ref}
                setOpen={() => this.setState({ open: false })}
                content={
                  <div>
                    <Custom
                      name={this.props.name}
                      icon={CommandIcon}
                      content={this.props.content}
                      desc={this.props.long_desc}
                    />
                  </div>
                }
              />
            }
            setOpen={() => this.setState({ open: false })}
            open={this.state.open}
          />
        </div>
        <div className="px-6 py-4 absolute w-full bottom-0">
          <ButtonLayout
            buttons={[
              {
                color: "indigo",
                onClick: () => this.setState({ open: true }),
                text: "Settings",
                direction: "right",
              },
            ]}
          />
        </div>
      </div>
    );
  }
}
const ClassComponentWithSession = withSession(CustomCard);

export default ClassComponentWithSession;
