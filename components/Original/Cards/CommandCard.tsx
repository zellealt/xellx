import ButtonLayout from "@/original/Buttons/ResponsiveCard/ButtonLayout";
import EmptyContent from "@/modules/Modals/EmptyContent";
import React from "react";
import discordGuild from "@/interfaces/discordGuild";
import command from "@/interfaces/command";
import Modal from "@/modules/Modals/Modal";
import Commands from "../Modals/Commands";
import SecurityRounded from "@material-ui/icons/SecurityRounded";
import CalendarTodayRoundedIcon from "@material-ui/icons/CalendarTodayRounded";
import { useSession } from "next-auth/client";
import SnackBar from "../../../modules/Layout/SnackBar";
import PeopleRoundedIcon from "@material-ui/icons/PeopleRounded";
import make_request from "@/lib/make_request";
interface CardProps {
  name: string;
  short_desc: any;
  long_desc: any;
  id: string;
  guild: discordGuild;
  commands: command[];
  config: any;
  session: any;
  loading: any;
}

function timeout(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
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

class CommandCard extends React.Component<
  CardProps,
  {
    open: boolean;
    data: any;
    alert: string | boolean;
    alertStatus: string | null;
    alertBool: boolean;
    alertCustomClasses: string;
    triggerUpdate: boolean;
    beforeUpdate: any;
  }
> {
  constructor(props: any) {
    super(props);

    this.state = {
      open: false,
      data: false,
      alert: false,
      alertStatus: null,
      alertBool: false,
      alertCustomClasses: "",
      triggerUpdate: true,
      beforeUpdate: props.guild.commands,
    };
  }

  async componentDidMount() {
    if (this.props.commands) {
      let array: { id: string; selected: boolean }[] = [];
      const nameArray = this.props.commands.map((el: { id: string }) => {
        let object = {
          id: el.id,
          selected: false,
        };
        if (this.props.guild.commands[el.id]) {
          object.selected = true;
        }

        array.push(object);

        return true;
      });

      this.setState({
        data: array,
      });
    }
  }

  async componentDidUpdate(prevProps: any, prevState: any) {
    if (this.state.triggerUpdate === false) {
      return this.setState({
        triggerUpdate: true,
      });
    }

    if (prevState.open === true && this.state.open === false) {
      if (this.props.commands) {
        let same = [];
        for (const command of this.state.data) {
          if (this.state.beforeUpdate[command.id] === command.selected) {
            same.push(command.id);
          }
        }
        if (same.length === this.state.data.length) {
          return;
        }
        this.setState({
          alert: "Applying the changes",
          alertStatus: "blue",
          alertBool: true,
          alertCustomClasses: "animate-pulse",
        });
        const { session, loading } = this.props;
        let urlString = "";
        for (const command of this.state.data) {
          urlString = urlString + `&${command.id}=${command.selected}`;
        }

        const jsonRes = await make_request(
          `
          /api/${this.props.guild.id}/update/commands?infoMessage=${this.props.name}${urlString}
        `,
          {
            Authorization: session.user.accessToken,
          }
        );
        if (jsonRes.status === "red") {
          this.setState({
            data: prevState.data,
            triggerUpdate: false,
          });
        }
        let newObject = {};
        for (const command of this.state.data) {
          // @ts-ignore
          newObject[command.id] = command.selected;
        }
        this.setState({
          alert: jsonRes.message,
          alertStatus: jsonRes.status,
          alertBool: true,
          alertCustomClasses: "",
          beforeUpdate: newObject,
        });

        await timeout(4000);

        this.setState({
          alertBool: false,
        });
      }
    }
  }

  render() {
    const ref = React.createRef();
    let CommandIcon;
    if (this.props.name === "Moderation")
      CommandIcon = (
        <SecurityRounded
          className="h-6 w-6 text-indigo-900"
          aria-hidden="true"
        />
      );
    if (this.props.name === "General")
      CommandIcon = (
        <CalendarTodayRoundedIcon
          className="h-6 w-6 text-indigo-900"
          aria-hidden="true"
        />
      );
    if (this.props.name === "Sticky Roles")
      CommandIcon = (
        <PeopleRoundedIcon
          className="h-6 w-6 text-indigo-900"
          aria-hidden="true"
        />
      );
    return (
      <div className="w-full h-60 rounded-lg border relative dark:border-gray-800">
        <div className="px-6 py-4">
          <div className="m-auto mb-3 flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100 sm:h-10 sm:w-10">
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
                  this.props.commands && (
                    <Commands
                      change_state={(state: any) =>
                        this.setState({ data: state })
                      }
                      state={this.state}
                      icon={CommandIcon}
                      desc={this.props.long_desc}
                      data={this.props.commands}
                      name={this.props.name}
                    />
                  )
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
              this.props.commands && {
                color: "indigo",
                onClick: () => this.setState({ open: true }),
                text: "Commands",
                direction: "left",
              },
              this.props.config && {
                color: "indigo",
                onClick: () => this.setState({ open: true }),
                text: "Settings",
                direction: "right",
              },
            ]}
          />
        </div>
        <SnackBar
          customClasses={this.state.alertCustomClasses}
          alert={this.state.alert}
          alertBool={this.state.alertBool}
          alertStatus={this.state.alertStatus}
        />
      </div>
    );
  }
}
const ClassComponentWithSession = withSession(CommandCard);

export default ClassComponentWithSession;