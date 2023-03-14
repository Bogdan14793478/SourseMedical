import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { createNewFile } from "../app/file";

export const getFromStorage = (key: string | null) => {
  return key ? localStorage.getItem(key) : null;
};

export const setToStorage = (data: any, key: string) => {
  localStorage.setItem(key, data);
};

export const removeFromStorage = (key: string) => {
  localStorage.removeItem(key);
};

export const successNotify = (text: string) => {
  toast.success(text, {
    position: toast.POSITION.TOP_CENTER,
  });
};

export const errorNotify = (text: string) => {
  toast.error(text, {
    position: toast.POSITION.TOP_CENTER,
  });
};

export const passworgExp = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/;

export const whichPageOpen = (data: string) => {
  switch (data) {
    case "/user-management/" || "/user-management":
      return 1;
    case "/resources-management":
      return 2;
    case "/ads-management":
      return 3;
    case "/channels-management":
      return 4;
    case "/complaints":
      return 5;
    case "/requests":
      return 6;
    case "/settings":
      return 7;
    default:
      return 1;
  }
};

const changeStructureFile = (data: File, category: string) => {
  const newFile = {
    category: category,
    file: data,
  };
  // setUploadedFilesInfoInStore(newFile);
  return newFile;
};

export const prepearInfoToSend = (category: string, file: File) => {
  try {
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      const result = createNewFile(formData, category);
      return result;
    }
  } catch (error) {
    const err = error as AxiosError;
    console.log(err, "err");
  }
};
