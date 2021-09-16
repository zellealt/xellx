const Spacer = (props: { px: number }) => {
  return (
    <div
      style={{
        marginTop: props.px,
      }}
    ></div>
  );
};

export const PaddingSpacer = (props: { px: number }) => {
  return (
    <div
      style={{
        paddingTop: props.px,
      }}
    ></div>
  );
};

export default Spacer;
