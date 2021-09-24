const Card = (props: any) => {
  console.log(props);
  return (
    <div className="center w-3/4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg">
      {props.children}
    </div>
  );
};

export default Card;
