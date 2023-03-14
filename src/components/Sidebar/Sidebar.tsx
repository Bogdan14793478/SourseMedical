import React, { useEffect, useState } from "react";
import group from "../../assets/images/group1.svg";
import { Link } from "react-router-dom";
import classes from "./styles.module.css";
import { useLocation } from "react-router-dom";
import { Tab } from "./types";
import {
  ContentManager,
  DangerTriangle,
  ManageCategories,
  UserManager,
  Settings,
} from "../../assets/svg";
import Notifications from "../../assets/svg/Notifications";
import clsx from "clsx";
import { whichPageOpen } from "../../helpers/helpers";

export const Sidebar = () => {
  const [numberLink, setNumberLink] = useState<number | null>(null);
  const location = useLocation();

  const getIconsColor = (value: boolean) => {
    return value ? "#FFFFFF" : "#808191";
  };

  useEffect(() => {
    const page = whichPageOpen(location.pathname);
    if (page) {
      setNumberLink(page);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={classes.container}>
      <img className={classes.img_logo} src={group} alt="" />
      <div className={classes.space}></div>
      <Link
        onClick={() => setNumberLink(1)}
        className={clsx(classes.tab, {
          [classes.tab_active]: numberLink === 1,
        })}
        to={"/user-management"}
      >
        <UserManager fill={getIconsColor(numberLink === 1)} />
        <div
          className={clsx(classes.name_tabs, {
            [classes.tab_name_active]: numberLink === 1,
          })}
        >
          {Tab.UserManagement}
        </div>
      </Link>
      <Link
        onClick={() => setNumberLink(2)}
        className={clsx(classes.tab, {
          [classes.tab_active]: numberLink === 2,
        })}
        to={"/resources-management"}
      >
        <ContentManager fill={getIconsColor(numberLink === 2)} />
        <div
          className={clsx(classes.name_tabs, {
            [classes.tab_name_active]: numberLink === 2,
          })}
        >
          {Tab.ResourcesManagement}
        </div>
      </Link>
      <Link
        onClick={() => setNumberLink(3)}
        className={clsx(classes.tab, {
          [classes.tab_active]: numberLink === 3,
        })}
        to={"/ads-management"}
      >
        <ManageCategories fill={getIconsColor(numberLink === 3)} />
        <div
          className={clsx(classes.name_tabs, {
            [classes.tab_name_active]: numberLink === 3,
          })}
        >
          {Tab.AdsManagement}
        </div>
      </Link>

      <Link
        onClick={() => setNumberLink(4)}
        className={clsx(classes.tab, {
          [classes.tab_active]: numberLink === 4,
        })}
        to={"/channels-management"}
      >
        <ManageCategories fill={getIconsColor(numberLink === 4)} />
        <div
          className={clsx(classes.name_tabs, {
            [classes.tab_name_active]: numberLink === 4,
          })}
        >
          {Tab.ChannelsManagement}
        </div>
      </Link>

      <Link
        onClick={() => setNumberLink(5)}
        className={clsx(classes.tab, {
          [classes.tab_active]: numberLink === 5,
        })}
        to={"/complaints"}
      >
        <DangerTriangle fill={getIconsColor(numberLink === 5)} />
        <div
          className={clsx(classes.name_tabs, {
            [classes.tab_name_active]: numberLink === 5,
          })}
        >
          {Tab.Complaints}
        </div>
      </Link>

      <Link
        onClick={() => setNumberLink(6)}
        className={clsx(classes.tab, {
          [classes.tab_active]: numberLink === 6,
        })}
        to={"/requests"}
      >
        <Notifications fill={getIconsColor(numberLink === 6)} />
        <div
          className={clsx(classes.name_tabs, {
            [classes.tab_name_active]: numberLink === 6,
          })}
        >
          {Tab.Request}
        </div>
      </Link>

      <Link
        onClick={() => setNumberLink(7)}
        className={clsx(classes.tab, {
          [classes.tab_active]: numberLink === 7,
        })}
        to={"/settings"}
      >
        <Settings fill={getIconsColor(numberLink === 7)} />
        <div
          className={clsx(classes.name_tabs, {
            [classes.tab_name_active]: numberLink === 7,
          })}
        >
          {Tab.Settings}
        </div>
      </Link>
    </div>
  );
};
