import { Initial as InitialUserType } from "../reducers/user";

export interface User {
  banned: boolean;
  email: string;
  id: string;
  isActivated: boolean;
  level: string;
  username: string;
}

export interface ActionResultI {
  success: boolean;
}

export interface Get_All_UserI {
  success: boolean;
  users: User[];
}

export interface RootState {
  user: InitialUserType;
}

export interface Get_All_Not_Approve_File {
  files: File[];
  totalCount: number;
  success: boolean;
}
