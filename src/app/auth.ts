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
export type UserParam = { email: string; id: string; isActivated: boolean };
type SignUpArgs = { email: string; password: string };
type SignUpResponse = AxiosResponse<{ tokens: Token; user: UserParam }>;

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
    return result;
  } catch (e) {
    console.log(e, "Error");
    return e;
  }
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
    setToStorage(result.data.tokens.accessToken, "accessToken");
    return result.data.user;
  } catch (e) {
    console.log(e, "Error");
    return e;
  }
};

export function getAllUser() {
  return async (
    dispatch: Dispatch<Action2<ActionTypesUser.GET_ALL_USER, User[]>>
  ) => {
    axiosInstance
      .get<never, AxiosResponse<Get_All_UserI>>("users")
      .then((res) => {
        dispatch(getAllUserToStore(res.data.users));
      });
  };
}
