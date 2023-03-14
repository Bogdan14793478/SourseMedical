import { AxiosResponse } from "axios";
import { Dispatch } from "react";
import { Get_All_Not_Approve_File } from "../redux/actions/interface";
import {
  Action2,
  ActionTypesFile,
  getAllFile,
} from "../redux/actions/typeActionFile";
import axiosInstance from "./axiosPrivate";

export function getAllNotApproveFile() {
  return async (
    dispatch: Dispatch<
      Action2<ActionTypesFile.GET_ALL_FILE, Get_All_Not_Approve_File>
    >
  ) => {
    axiosInstance
      .post<never, AxiosResponse<Get_All_Not_Approve_File>>(
        "/file/allNotApproved"
      )
      .then((res) => {
        dispatch(getAllFile(res));
      });
  };
}

export const createNewFile = (file: FormData, category: string) => {
  return axiosInstance.post<Promise<AxiosResponse<FormData, string>>, never>(
    "file",
    { category, file }
  );
};
