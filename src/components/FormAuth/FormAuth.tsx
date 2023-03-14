import React, { useState } from "react";
import { Form, Formik, FormikHelpers } from "formik";
import * as Yup from "yup";
import { AuthFormData } from "./types";

import classes from "./styles.module.css";
import { ErrorMsg, Labels } from "../../helpers/constants";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userIsAuth } from "../../redux/actions/typeActionUser";
import { useAppSelector } from "../../hooks";
// import { useCookies } from "react-cookie";
// import Cookies from "universal-cookie";

import clsx from "clsx";
import { errorNotify, successNotify } from "../../helpers/helpers";

const initialValues: AuthFormData = {
  name: "",
  password: "",
};

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .email("Enter a valid email")
    .required(ErrorMsg.resultRequired),
  password: Yup.string()
    .min(6, ErrorMsg.checkShortPassword)
    .max(16, ErrorMsg.checkLongPassword)
    .required(ErrorMsg.resultRequired),
});

export const FormAuth = ({ param }: any) => {
  const [cookies, setCookies] = useState("");
  // const cookies = new Cookies();

  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function authorizeStatus() {
    dispatch(userIsAuth(true));
  }
  // if (cookies.length) {
  //   console.log("IF WORK");
  //   document.cookie = `refreshToken=${cookies}; SameSite=None; Secure`;
  // }
  const set = (name: string, value = ""): void => {
    document.cookie = `${name}=${value}`;
  };

  const handleClickLogin = async (data: AuthFormData) => {
    const isAdmin = await param(data);
    console.log(isAdmin, "isAdmin");
    if (!!isAdmin && location.pathname === "/login") {
      // document.cookie = `refreshToken=${isAdmin}`;
      set("token", isAdmin);
      console.log("work");
      // setCookies(isAdmin);
      authorizeStatus();
      debugger;
      // const res = cookies.set("refreshToken", JSON.stringify(isAdmin));
      // console.log(res, "res");
      // cookies.set("refreshToken", isAdmin);
      // console.log(cookies.get("refreshToken"));
      // document.cookie = `refreshToken=${isAdmin}; SameSite=None; Secure`;
      navigate("/user-management");
      return;
    }
    if (isAdmin.status === 200 && location.pathname === "/registration") {
      authorizeStatus();
      navigate("/user-management");
      successNotify("Hi on the board");
      return;
    }
    if (isAdmin.response.status >= 400) {
      errorNotify(isAdmin.response.data.message);
    }
  };

  const onSubmit = (
    values: AuthFormData,
    props: FormikHelpers<AuthFormData>
  ): void => {
    handleClickLogin(values);
    props.resetForm();
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        validateOnMount
      >
        {({ errors, values, handleChange, dirty, isValid }) => (
          <Form>
            <div className={classes.form_field}>
              <label htmlFor="User name" className={classes.textAuth}>
                {Labels.userName}
                <input
                  className={clsx(classes.inputAuth, {
                    [classes.inputError]: errors.name,
                  })}
                  type="name"
                  id="name"
                  autoComplete="name"
                  name="name"
                  required
                  value={values.name}
                  onChange={handleChange}
                />
                {errors.name !== "Required" && (
                  <div className={classes.error}>{errors.name}</div>
                )}
              </label>
            </div>
            <div className={classes.form_field}>
              <label htmlFor="Password" className={classes.textAuth}>
                {Labels.password}
                <input
                  className={clsx(classes.inputAuth, {
                    [classes.inputError]: errors.password,
                    [classes.inputSuccess]: !errors.password,
                  })}
                  type="password"
                  id="password"
                  autoComplete="password"
                  name="password"
                  required
                  value={values.password}
                  onChange={handleChange}
                />
                {errors.password !== "Required" && (
                  <div className={classes.error}>{errors.password}</div>
                )}
              </label>

              <button
                type="submit"
                disabled={!(isValid && dirty)}
                className={classes.btnLogIn}
              >
                {location.pathname === "/registration"
                  ? Labels.registration
                  : Labels.logIn}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};
