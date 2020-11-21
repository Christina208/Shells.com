import axios from "axios";
import { onGlobalSuccess, onGlobalError } from "./serviceHelper";

let endPoint = "https://localhost:50001/api/temp/auth/";
const logIn = (payload) => {
  const config = {
    method: "POST",
    url: endPoint + "login/1/ckirk/User",
    data: payload,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config).then(onGlobalSuccess).catch(onGlobalError);
};
const currentUser = () => {
  const config = {
    method: "GET",
    url: endPoint + "current",
    withCredentials: true,
    crossdomain: true,
    headers: {
      "Content-Type": "application/json",
    },
  };

  return axios(config).then(onGlobalSuccess).catch(onGlobalError);
};
const logOutUser = () => {
  const config = {
    method: "GET",
    url: endPoint + "logout",
    crossdomain: true,
    headers: {
      "Content-Type": "application/json",
    },
  };

  return axios(config).then(onGlobalSuccess).catch(onGlobalError);
};

export { logIn, currentUser, logOutUser };
