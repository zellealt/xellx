const CardCustomShimmer = (props: { content1: any; content2: any }) => {
  return (
    <div className="overflow-hidden rounded-lg border">
      <div className="px-6 py-4">
        <h4 className="mb-3 text-xl font-semibold tracking-tight text-gray-800">
          {props.content1}
        </h4>
        <div className="leading-normal">{props.content2}</div>
      </div>
    </div>
  );
};

export default CardCustomShimmer;
