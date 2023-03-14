import classNames from "classnames";
import React from "react";
import classes from "./styles.module.css";
import { AvatarType } from "./types";

export const Avatar: React.FC<AvatarType> = ({ img, size, className }) => {
  const avatarClass = classNames(
    classes.avatar,
    {
      [classes[`avatar_size_${size}`]]: size,
    },
    className
  );
  return <img className={avatarClass} src={img} alt="" />;
};
