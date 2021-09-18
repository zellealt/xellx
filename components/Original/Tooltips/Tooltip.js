import React from "react"

function Tooltip({ children, tooltipText }) {
  const tipRef = React.createRef(null);
  function handleMouseEnter() {
      tipRef.current.style.opacity = 1;
      tipRef.current.style.marginLeft = "30px";
      tipRef.current.style.marginTop = "-55px";
  }
  function handleMouseLeave() {
      tipRef.current.style.opacity = 0;
      tipRef.current.style.marginLeft = "30px";
      tipRef.current.style.marginTop = "-60px";
  }
  return (
      <span
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
      >
          <div
              className="absolute cursor-default whitespace-no-wrap text-black bg-gray-100 dark:bg-gray-800 dark:text-white px-2 py-1 rounded flex items-center transition-all duration-150 border border-indigo-500"
              style={{ opacity: 0 }}
              ref={tipRef}
          >
              {tooltipText}
          </div>
          {children}
      </span>
  );
}
export default Tooltip