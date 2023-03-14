import { ActionTypesFile } from "../actions/typeActionFile";

export type Initial = {
  files: [];
  totalCount: number;
};
const initial: Initial = {
  files: [],
  totalCount: 0,
};

export const fileReducer = (state = initial, action: any): Initial => {
  switch (action.type) {
    case ActionTypesFile.GET_ALL_FILE:
      return {
        ...state,
        files: action.payload.data.files,
        totalCount: action.payload.data.totalCount,
      };
    default:
      return state;
  }
};
