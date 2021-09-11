import router from "next/router";

const Navigation = [
  {
    name: "Overview",
    href: function () {
      router.push({
        pathname: "./overview",
        query: { ...router.query },
      });
    },
    key: "overview",
    current: false,
  },
  {
    name: "Plugins",
    href: function () {
      router.push({
        pathname: "./plugins",
        query: { ...router.query },
      });
    },
    key: "plugins",
    current: false,
  },
  {
    name: "Audit Log",
    href: function () {
      router.push({
        pathname: "./auditlog",
        query: { ...router.query },
      });
    },
    key: "auditlog",
    current: false,
  },
  {
    name: "Settings",
    href: function () {
      router.push({
        pathname: "./settings",
        query: { ...router.query },
      });
    },
    key: "settings",
    current: false,
  },
];

export default Navigation;
