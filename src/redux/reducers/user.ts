import { User } from "../actions/interface";
import {
  ActionTypesUser,
  DeleteChooseUserType,
  GetAllUserType,
  SetUserOptionsType,
  TakeInformIsAuth,
} from "../actions/typeActionUser";

export type Initial = {
  isAuth: boolean;
  email: string;
  id: string;
  isActivated: boolean;
  users: User[];
};
const initial: Initial = {
  isAuth: !!localStorage.getItem("accessToken"),
  email: "",
  id: "",
  isActivated: false,
  users: [],
};

type Actions =
  | TakeInformIsAuth
  | GetAllUserType
  | DeleteChooseUserType
  | SetUserOptionsType;

export const userReducer = (state = initial, action: Actions): Initial => {
  switch (action.type) {
    case ActionTypesUser.USER_IS_AUTH:
      return {
        ...state,
        isAuth: action.payload,
      };
    case ActionTypesUser.GET_ALL_USER:
      return {
        ...state,
        users: [...action.payload],
      };
    case ActionTypesUser.DELETE_CHOOSE_USER:
      return {
        ...state,
        users: state.users.filter((item) => item.id !== action.payload),
      };
    case ActionTypesUser.SET_USER_OPTIONS:
      console.log(action.payload, "action.payload");
      return {
        ...state,
        email: action.payload.email,
        id: action.payload.id,
        isActivated: action.payload.isActivated,
      };

    default:
      return state;
  }
};
