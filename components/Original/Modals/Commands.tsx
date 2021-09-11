import List from "./Components/List";
import Title from "./Components/Title";

const Commands = (props: {
  data: any;
  name: string;
  desc: string;
  icon: any;
  change_state: any;
  state: any;
}) => {
  const data = props.data;

  return (
    <div>
      <Title title={props.name} desc={props.desc} icon={props.icon} />
      <List data={data} change_state={props.change_state} state={props.state} />
    </div>
  );
};

export default Commands;
