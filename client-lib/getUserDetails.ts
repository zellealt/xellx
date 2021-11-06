import makeRequest from "./makeRequest";

const getUserDetails = () =>
  makeRequest(
    "http://" + process.env.NEXT_PUBLIC_API_URI! + "/api/" + "auth",
    {},
    true,
    false
  );

export default getUserDetails;
