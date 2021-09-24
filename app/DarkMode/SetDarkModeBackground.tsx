const SetDarkModeBackground = (document: Document) => {
  const body = document.getElementsByTagName("body")[0];
  body.className = "dark:bg-gray-900";
};

export default SetDarkModeBackground;
