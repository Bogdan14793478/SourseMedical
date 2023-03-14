import React from "react";
import { Labels } from "../../helpers/constants";
import Icon from "../../assets/images/searchIcon.svg";
import classes from "./styles.module.css";
import { findName } from "../../constants/userManagement";

export const SearchInput = () => {
  const choosePerson = (item: string) => () => {
    console.log(item, "item");
  };
  return (
    <div>
      <div className={classes.wrapper}>
        <input
          className={classes.input_filtered}
          placeholder={Labels.searchUser}
        />
        <img className={classes.icon_search} src={Icon} alt="" />
      </div>
      {!!findName.length && (
        <div className={classes.result_search}>
          {findName?.map((item, i) => {
            return (
              <div
                className={classes.render_find_name}
                onClick={choosePerson(item)}
                key={i}
              >
                {item}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
