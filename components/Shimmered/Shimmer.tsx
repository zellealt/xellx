const Shimmer = (props: {
  height: number | string;
  width: number | string;
  rounded: string;
}) => {
  return (
    <div
      className={`h-${props.height} w-${props.width} rounded-${props.rounded} bg-gray-200 dark:bg-gray-700 animate-pulse`}
    ></div>
  );
};

export default Shimmer;
