import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { RootState } from "../store";
import { getFromStorage } from "./helpers";

export const PrivateRoutes = ({ component: RouteComponent }: any) => {
  const isAuth = useSelector((state: RootState) => state.user.isAuth);
  const Authentication = isAuth && !!getFromStorage("refreshToken");

  return Authentication ? <RouteComponent /> : <Navigate to="/login" />;
};
