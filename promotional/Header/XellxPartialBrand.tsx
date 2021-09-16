import getTheme from "@/lib/get_theme";

const XellxPartialBrand = (props: { height: string; color: string }) => {
  return (
    <div className="flex-shrink-0 filter drop-shadow-sm">
      <svg
        data-v-423bf9ae=""
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 75 90"
        className={"h-" + props.height}
      >
        <g
          data-v-423bf9ae=""
          id="24c1b71f-0004-4f5d-9d78-8c7988c7ea9f"
          transform="matrix(2.8125,0,0,2.8125,-7.170000076293945,0)"
          stroke="none"
          className={"fill-current " + "text-" + props.color + " fill-current"}
        >
          <path d="M2.83 18.247l26.34-9.124L2.83 0zM29.17 32V13.753L2.83 22.877z"></path>
        </g>
      </svg>
    </div>
  );
};

export default XellxPartialBrand;
