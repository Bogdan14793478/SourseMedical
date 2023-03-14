import { User } from "../actions/interface";
import {
  ActionTypesUser,
  DeleteChooseUserType,
  GetAllUserType,
  TakeInformIsAuth,
} from "../actions/typeActionUser";

export type Initial = {
  isAuth: boolean;
  users: User[];
};
const initial: Initial = {
  isAuth: !!localStorage.getItem("accessToken"),
  users: [],
};

type Actions = TakeInformIsAuth | GetAllUserType | DeleteChooseUserType;

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
      console.log(action.payload, "action.payload");
      return {
        ...state,
        users: state.users.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};
