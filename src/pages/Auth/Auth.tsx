import React from "react";
import classes from "./styles.module.css";
import group from "../../assets/images/group1.svg";
import { FormAuth } from "../../components/FormAuth/FormAuth";
import { signIn } from "../../app/auth";

export const Auth = () => {
  return (
    <div className={classes.auth_container}>
      <div className={classes.auth_field}>
        <img src={group} alt="" />
        <FormAuth param={signIn} />
      </div>
    </div>
  );
};
