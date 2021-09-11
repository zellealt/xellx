import React from "react";
import ReactDOM from "react-dom";

export default ({ children, parent, className }: any) => {
  // Create div to contain everything
  const el = React.useMemo(() => document.createElement("div"), []);
  // On mount function
  React.useEffect(() => {
    // work out target in the DOM based on parent prop
    const target = parent && parent.appendChild ? parent : document.body;
    // Default classes
    const classList = ["portal-container"];
    // If className prop is present add each class the classList
    if (className) className.split(" ").forEach((item: string) => classList.push(item));
    classList.forEach((item) => el.classList.add(item));
    // Append element to dom
    target.appendChild(el);
    // On unmount function
    return () => {
      // Remove element from dom
      target.removeChild(el);
    };
  }, [el, parent, className]);
  // return the createPortal function
  return ReactDOM.createPortal(children, el);
}