import make_request from "@/lib/make_request";
import Entry from "./Table/Entry";
import Head from "./Table/Head";
import React from "react";
import User from "./Fields/User";
import capitalizeFirstLetter from "@/generals/capitalizeFirstLetter";

class Commands extends React.Component<
  {
    category: string;
  },
  {
    commands: any;
  }
> {
  constructor(props: any) {
    super(props);

    this.state = {
      commands: [],
    };
  }

  async componentDidMount() {
    const res = await make_request("/commands.json");

    this.setState({
      commands: res,
    });
  }

  render() {
    return (
      <div>
        <h2 className="p-5 text-2xl dark:bg-gray-800 bg-gray-50 rounded-t-lg font-bold">
          {capitalizeFirstLetter(this.props.category)} Commands
        </h2>
        <div className="overflow-x-auto dark:bg-gray-900">
          <div className="inline-block min-w-full overflow-hidden">
            <table className="min-w-full leading-normal">
              <Head />
              <tbody>
                {this.state.commands
                  .filter(
                    (entry: any) =>
                      this.props.category.toLowerCase() ===
                      entry.category.toLowerCase()
                  )
                  .map((entry: any) => {
                    let fields: any[] = [];

                    entry.fields.map((field: any) => {
                      if (field.type === "user") {
                        fields.push(<User optional={field.optional} />);
                      }

                      if (field.type === "string") {
                        fields.push(<div>Hello</div>);
                      }
                    });

                    return (
                      <Entry
                        key={entry.command}
                        name={entry.friendlyName}
                        command={entry.command}
                        description={entry.description}
                        usage={fields}
                      />
                    );
                  })}
              </tbody>
            </table>
            <div className="pt-1.5 bg-gray-50 rounded-b-xl"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Commands;
