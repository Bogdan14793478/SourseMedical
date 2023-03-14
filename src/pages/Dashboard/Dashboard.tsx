import React from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import classes from "./styles.module.css";
export const Dashboard = () => {
  return (
    <div className={classes.main_container}>
      <div>
        <Sidebar />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};
