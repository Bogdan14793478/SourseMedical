import { combineReducers } from "redux";
import { userReducer } from "./user";
import { fileReducer } from "./file";

export const rootReducer = combineReducers({
  user: userReducer,
  file: fileReducer,
});
