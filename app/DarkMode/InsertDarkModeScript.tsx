import DarkModeScript from "./DarkModeScript";

const InsertDarkModeScript = (document: Document) => {
  let script = document.createElement("script");
  script.type = "text/javascript";
  try {
    script.appendChild(document.createTextNode(DarkModeScript));
    document.body.appendChild(script);
  } catch (e) {
    script.text = DarkModeScript;
    document.body.appendChild(script);
  }
};

export default InsertDarkModeScript;
