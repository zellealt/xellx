import ChangeSystemDarkMode from "app/DarkMode/ChangeSystemDarkMode";
import InsertDarkModeScript from "app/DarkMode/InsertDarkModeScript";
import SetDarkModeBackground from "app/DarkMode/SetDarkModeBackground";
import routeChangeComplete from "app/Events/routeChangeComplete";
import routeChangeError from "app/Events/routeChangeError";
import routeChangeStart from "app/Events/routeChangeStart";

const componentDidMount = (document: Document, window: Window, that: any) => {
  SetDarkModeBackground(document);
  ChangeSystemDarkMode(document, window);
  InsertDarkModeScript(document);

  routeChangeStart(that);
  routeChangeComplete(that);
  routeChangeError(that);
};

export default componentDidMount;
