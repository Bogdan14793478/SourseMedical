import React from "react";
import { Labels } from "../../helpers/constants";
import Modal from "../Modal";
import classes from "./styles.module.css";
import { BanModalI } from "./types";

export const BanModal: React.FC<BanModalI> = ({
  handleClickBan,
  closeBanModal,
  isChecked,
  setIsChecked,
  inputBan,
}) => {
  return (
    <Modal
      buttonText={Labels.ban}
      onClick={handleClickBan}
      onClose={closeBanModal}
    >
      <div>
        <div className={classes.modal_title}>{Labels.titleModalBan}</div>
        <div className={classes.modal_text}>
          <ul>
            <li>
              <input
                id="checkbox1"
                className={classes.myinput}
                type="radio"
                name="checkbox1"
                checked={isChecked === 1 ? true : false}
                onChange={() => setIsChecked(1)}
              />
              <label htmlFor="checkbox1" className={classes.modalLi}>
                Minor safety
              </label>
            </li>
            <li>
              <input
                className={classes.myinput}
                id="checkbox2"
                type="radio"
                name="checkbox2"
                checked={isChecked === 2 ? true : false}
                onChange={() => setIsChecked(2)}
              />
              <label htmlFor="checkbox2" className={classes.modalLi}>
                Adult nudity and sexual activities
              </label>
            </li>
            <li>
              <input
                className={classes.myinput}
                id="checkbox3"
                type="radio"
                name="checkbox3"
                checked={isChecked === 3 ? true : false}
                onChange={() => setIsChecked(3)}
              />
              <label htmlFor="checkbox3" className={classes.modalLi}>
                Bulling and harassment
              </label>
            </li>
            <li>
              <input
                className={classes.myinput}
                id="checkbox4"
                type="radio"
                name="checkbox4"
                checked={isChecked === 4 ? true : false}
                onChange={() => setIsChecked(4)}
              />
              <label htmlFor="checkbox4" className={classes.modalLi}>
                Illegal activities and regulated goods
              </label>
            </li>
            <li>
              <input
                className={classes.myinput}
                id="checkbox5"
                type="radio"
                name="checkbox5"
                checked={isChecked === 5 ? true : false}
                onChange={() => setIsChecked(5)}
              />
              <label htmlFor="checkbox5" className={classes.modalLi}>
                Other
              </label>
              {isChecked === 5 && (
                <div>
                  <input
                    className={classes.input_text}
                    ref={inputBan}
                    type="text"
                    placeholder="type problem here"
                  />
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
    </Modal>
  );
};
