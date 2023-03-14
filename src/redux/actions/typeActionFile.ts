export enum ActionTypesFile {
  GET_ALL_FILE = "GET_ALL_FILE",
}
export type Action2<T, P> = { type: T; payload: P };

export type GetAllNotAproveFile = Action2<ActionTypesFile.GET_ALL_FILE, any>;
export const getAllFile = (payload: any) => ({
  type: ActionTypesFile.GET_ALL_FILE,
  payload,
});
