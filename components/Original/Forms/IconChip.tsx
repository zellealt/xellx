const CircleChip = (props: { icon: any; name: string; classes: string }) => {
  return (
    <span className="bg-indigo-800 flex justify-center place-items-center w-9 h-9 text-sm text-white rounded">
      {props.icon}
    </span>
  );
};

export default CircleChip;
