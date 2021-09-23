function getTextColor(rgbaParam: any) {
  let rgba = rgbaParam.match(/\d+/g);
  if (rgba[0] * 0.299 + rgba[1] * 0.587 + rgba[2] * 0.114 > 186) {
    return "black";
  } else {
    return "white";
  }
}

function toColor(num: number) {
  // convert to rgb color
  num >>>= 0;
  var b = num & 0xff,
    g = (num & 0xff00) >>> 8,
    r = (num & 0xff0000) >>> 16,
    a = 1;
  let rgb = "rgba(" + [r, g, b, a].join(",") + ")";

  if (getTextColor(rgb) === "black") {
    return "rgba(" + [r / 1.5, g / 1.5, b / 1.5, a / 1.5].join(",") + ")";
  } else {
    return "rgba(" + [r, g, b, a].join(",") + ")";
  }
}

const Chip = (props: {
  name: string;
  text: string;
  intColor: number;
  remove: any;
}) => {
  return (
    <span className="bg-indigo-800 flex p-2 px-4 text-sm text-white rounded">
      <div
        style={{
          backgroundColor: toColor(props.intColor),
          marginTop: 3,
        }}
        className="w-3.5 h-3.5 mr-3 rounded-full shadow-md"
      ></div>
      {props.text}
      <button className="bg-transparent hover" onClick={props.remove}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          fill="currentColor"
          className="ml-4"
          viewBox="0 0 1792 1792"
        >
          <path d="M1490 1322q0 40-28 68l-136 136q-28 28-68 28t-68-28l-294-294-294 294q-28 28-68 28t-68-28l-136-136q-28-28-28-68t28-68l294-294-294-294q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 294 294-294q28-28 68-28t68 28l136 136q28 28 28 68t-28 68l-294 294 294 294q28 28 28 68z"></path>
        </svg>
      </button>
    </span>
  );
};

export default Chip;
