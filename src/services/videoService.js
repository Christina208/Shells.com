import axios from "axios";
import { onGlobalSuccess, onGlobalError } from "./serviceHelper";
let endPoint = "https://localhost:50001/api/videos/";

export const add = (payload) => {
  const config = {
    method: "POST",
    url: endPoint,
    withCredentials: true,
    data: payload,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config).then(onGlobalSuccess).catch(onGlobalError);
};
export const getById = (id) => {
  const config = {
    method: "GET",
    url: endPoint + id,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config).then(onGlobalSuccess).catch(onGlobalError);
};
export const getRenderVideos = () => {
  const config = {
    method: "GET",
    url: endPoint,
    withCredentials: true,
    crossdomain: true,
    headers: {
      "Content-Type": "application/json",
    },
  };

  return axios(config).then(onGlobalSuccess).catch(onGlobalError);
};

export const remove = (id) => {
  const config = {
    method: "DELETE",
    url: endPoint + id,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config).then(onGlobalSuccess).catch(onGlobalError);
};
export const update = (payload) => {
  const config = {
    method: "PUT",
    url: endPoint + payload.id,
    data: payload,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config).then(onGlobalSuccess).catch(onGlobalError);
};
export const search = (query, pageIndex, pageSize) => {
  const config = {
    method: "GET",
    url:
      endPoint +
      `search?pageIndex=${pageIndex}&pageSize=${pageSize}&query=${query}`,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config).then(onGlobalSuccess).catch(onGlobalError);
};
export default { add, getById, getRenderVideos, remove, update, search };
