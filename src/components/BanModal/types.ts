import { Dispatch, MutableRefObject, SetStateAction } from "react";

export interface BanModalI {
  handleClickBan: () => void;
  closeBanModal: () => void;
  isChecked: number;
  setIsChecked: Dispatch<SetStateAction<number>>;
  inputBan: MutableRefObject<HTMLInputElement | null>;
}
