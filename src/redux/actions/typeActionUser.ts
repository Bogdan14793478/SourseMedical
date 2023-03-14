import { User } from "./interface";

export enum ActionTypesUser {
  USER_IS_AUTH = "USER_IS_AUTH",
  GET_ALL_ADMIN = "GET_ALL_ADMIN",
  GET_ALL_USER = "GET_ALL_USER",
  DELETE_CHOOSE_USER = "DELETE_CHOOSE_USER",
}
export type Action2<T, P> = { type: T; payload: P };

export type TakeInformIsAuth = Action2<ActionTypesUser.USER_IS_AUTH, boolean>;
export const userIsAuth = (payload: boolean): TakeInformIsAuth => ({
  type: ActionTypesUser.USER_IS_AUTH,
  payload,
});

export type GetAllUserType = Action2<ActionTypesUser.GET_ALL_USER, User[]>;
export const getAllUserToStore = (payload: User[]): GetAllUserType => ({
  type: ActionTypesUser.GET_ALL_USER,
  payload,
});

export type DeleteChooseUserType = Action2<
  ActionTypesUser.DELETE_CHOOSE_USER,
  string
>;
export const actionDeleteChooseUser = (
  payload: string
): DeleteChooseUserType => ({
  type: ActionTypesUser.DELETE_CHOOSE_USER,
  payload,
});
