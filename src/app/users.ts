import axiosInstance from "./axiosPrivate";

// deleteChooseUser
export function deleteChooseUser(id: string | null) {
  return axiosInstance.delete<never, never>(`user/${id}`);
}
