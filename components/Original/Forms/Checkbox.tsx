const Checkbox = (props: {
  name: string;
  text: string;
  color: string;
  ifChecked: boolean;
  changed: any;
}) => {
  return (
    <label className="flex items-center space-x-3 mb-3">
      <input
        type="checkbox"
        checked={props.ifChecked}
        onChange={props.changed}
        name={props.name}
        className={`transition form-tick appearance-none bg-white bg-check h-6 w-6 border border-gray-300 rounded-md checked:bg-${props.color}-500 checked:border-transparent focus:outline-none`}
      />
      <span className="text-gray-700 dark:text-white font-normal">
        {props.text}
      </span>
    </label>
  );
};

export default Checkbox;
