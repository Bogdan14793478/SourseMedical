import {
  getFromStorage,
  removeFromStorage,
  setToStorage,
} from "../helpers/helpers";
import mem from "mem";
import { axiosPublic } from "./axiosPublic";

const refreshTokenFn = async () => {
  try {
    const response: any = await axiosPublic.get("/refresh");
    console.log(response, "resp to send refresh token");

    // const { session } = response.data;
    // console.log(session, "session");
    if (!response?.tokens.accessToken) {
      console.log("not get accessToken");
      // Log Out
      // removeFromStorage("refreshToken");
      // removeFromStorage("accessToken");
    }
    console.log(response, "session.tokens");

    setToStorage(response.data.tokens.accessToken, "accessToken");
    // setToStorage(response.data.tokens.refreshToken, "refreshToken");

    return response.data.tokens;
  } catch (error) {
    // Log Out
    // removeFromStorage("refreshToken");
    // removeFromStorage("accessToken");
  }
};

const delay = 20000;

export const memoizedRefreshToken = mem(refreshTokenFn, {
  maxAge: delay,
});
