import { AxiosResponse } from "axios";
import { Dispatch } from "react";
import { AuthFormData } from "../components/FormAuth/types";
import { setToStorage } from "../helpers/helpers";
import {
  Action2,
  ActionTypesUser,
  getAllUserToStore,
} from "../redux/actions/typeActionUser";
import { axiosPublic } from "./axiosPublic";
import axiosInstance from "./axiosPrivate";

import { Get_All_UserI, User } from "../redux/actions/interface";

type Token = { accessToken: string; refreshToken: string };
type SignUpArgs = { email: string; password: string };
type SignUpResponse = AxiosResponse<{ tokens: Token }>;

export const signUp = async (data: AuthFormData) => {
  try {
    const result = await axiosPublic.post<SignUpArgs, SignUpResponse>(
      "/registration",
      {
        email: data.name,
        password: data.password,
      }
    );
    setToStorage(result.data.tokens.accessToken, "accessToken");
    setToStorage(result.data.tokens.refreshToken, "refreshToken");
    return result;
  } catch (e) {
    console.log(e, "Error");
    return e;
  }
};

const saveToCookie = (cookieName: string, cookieValue: string): void => {
  document.cookie = `${cookieName}=${JSON.stringify(cookieValue)}`;
};

export const signIn = async (data: AuthFormData) => {
  try {
    const result = await axiosPublic.post<SignUpArgs, SignUpResponse>(
      "/login",
      {
        email: data.name,
        password: data.password,
      }
    );
    console.log(result, "result AUTH");
    // saveToCookie("refreshToken", result.data.tokens.refreshToken);
    setToStorage(result.data.tokens.accessToken, "accessToken");
    setToStorage(result.data.tokens.refreshToken, "refreshToken");
    return result.data.tokens.refreshToken;
  } catch (e) {
    console.log(e, "Error");
    return e;
  }
};
// export function getAllUser() {
//   axiosInstance
//     .get<never, AxiosResponse<Get_All_UserI>>("users")
//     .then((res) => {
//       console.log(res, "res");
//       console.log(res.data.users, "res user");
//     });
// }

export function getAllUser() {
  return async (
    dispatch: Dispatch<Action2<ActionTypesUser.GET_ALL_USER, User[]>>
  ) => {
    axiosInstance
      .get<never, AxiosResponse<Get_All_UserI>>("users")
      .then((res) => {
        console.log(res, "res");
        dispatch(getAllUserToStore(res.data.users));
        console.log(res.data.users, "res user");
      });
  };
}
