import axios from "axios";

const axiosinstance = axios.create({
  baseURL: "https://eservice-backend.onrender.com/api",
});
axiosinstance.interceptors.request.use(function (config) {
  const token = localStorage.getItem("authTokens");
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});

export { axiosinstance };
