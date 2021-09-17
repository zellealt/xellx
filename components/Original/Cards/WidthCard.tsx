interface CardProps {
  name: any;
  content: any;
}

const WidthCard = (props: CardProps) => {
  return (
    <div className="overflow-hidden rounded-lg border dark:border-gray-800 w-full">
      <div className="px-6 py-4">
        <h4
          className={`mb-3 text-xl font-semibold tracking-tight ${
            props.name.color
          } ${
            props.name.color === "gray-900" ? "dark:text-gray-100" : ""
          } float-left`}
        >
          {props.name.content}
        </h4>
        <h4
          className={`mb-3 text-xl tracking-tight text-${props.content.color} float-right font-normal`}
        >
          {props.content.content}
        </h4>
      </div>
    </div>
  );
};

export default WidthCard;
