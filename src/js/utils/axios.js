import axios from "axios";
import qs from "querystring";

const service = axios.create({
  headers: {
    post: {
      "Content-Type": "application/json;charset=UTF-8",
    },
    patch: {
      "Content-Type": "application/json;charset=UTF-8",
    },
  },
  // baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 50000, // request timeout
});

service.interceptors.request.use(
  (config) => {
    if (
      config.headers["Content-Type"] === "application/x-www-form-urlencoded;"
    ) {
      config.data = qs.stringify(config.data);
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response) => {
    console.log('interceptors: ', response);
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default service;
