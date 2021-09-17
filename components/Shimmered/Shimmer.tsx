const Shimmer = (props: {
  height: number | string;
  width: number | string;
  rounded: string;
}) => {
  const height = "h-" + props.height;
  const width = "w-" + props.width;
  const rounded = "rounded-" + props.rounded;
  return (
    <div
      className={`${height} ${width} ${rounded} bg-gray-200 dark:bg-gray-700 animate-pulse`}
    ></div>
  );
};

export default Shimmer;
