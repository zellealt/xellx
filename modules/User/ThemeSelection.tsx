import { useSession } from "next-auth/client";
import React from "react";
import Select from "@/original/Forms/DropdownSelect";
import withSession from "@/hooks/withSesssion";

interface SettingsProps {
  session: any;
  loading: any;
  label?: boolean;
}

const Themes = [
  { id: "0", color: 0, name: "System Theme" },
  { id: "dark", color: 0, name: "Night" },
  { id: "light", color: 0, name: "Day" },
];

class ThemeSelection extends React.Component<
  SettingsProps,
  {
    theme: any;
  }
> {
  constructor(props: any) {
    super(props);
    this.state = {
      theme: { id: 100, color: 0, name: "Loading" },
    };
  }

  componentDidMount() {
    if (
      !("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      this.setState({
        theme: Themes[0],
      });
      return;
    }

    if (
      !("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: light)").matches
    ) {
      this.setState({
        theme: Themes[0],
      });
      return;
    }

    if (localStorage.theme === "dark") {
      this.setState({
        theme: Themes[1],
      });
    } else {
      this.setState({
        theme: Themes[2],
      });
    }
  }

  componentDidUpdate(prevProps: any, prevState: any) {
    if (prevState.theme !== this.state.theme) {
      if (this.state.theme.id == "0") {
        localStorage.removeItem("theme");
      } else {
        localStorage.theme = this.state.theme.id;
      }

      if (
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      ) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  }

  render() {
    let label;
    if (this.props.label === undefined) {
      label = true;
    } else {
      label = this.props.label;
    }

    return (
      <>
        <Select
          selected={this.state.theme}
          setSelected={(entry: any) => this.setState({ theme: entry })}
          name={label ? "Appearance" : ""}
          data={Themes}
        />
      </>
    );
  }
}

const ClassComponentWithSession = withSession(ThemeSelection);

export default ClassComponentWithSession;
