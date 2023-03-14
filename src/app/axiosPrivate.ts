import axios from "axios";
import { getFromStorage, setToStorage } from "../helpers/helpers";
import { memoizedRefreshToken } from "./refreshToken";

const baseURL = `${process.env.REACT_APP_BASE_URL}`;

const axiosInstance = axios.create({
  withCredentials: true, // что б куки отправлять в каждом запросе
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  async (config) => {
    const accessToken = getFromStorage("accessToken");
    // console.log(accessToken, "accessToken");
    if (accessToken) {
      config.headers[`Authorization`] = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    console.log(error, "error is");
    const config = error?.config;
    console.log(config, "config");
    if (error?.response?.status === 401 && !config?.sent) {
      config.sent = true;

      const result = await memoizedRefreshToken();

      if (result?.accessToken) {
        config.headers[`Authorization`] = `Bearer ${result?.accessToken}`;
        // setToStorage(result?.accessToken, "accessToken");
      }

      return axiosInstance(config);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
