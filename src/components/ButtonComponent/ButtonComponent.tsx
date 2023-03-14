import React from "react";
import classNames from "classnames";
import classes from "./styles.module.css";
import { ButtonProps } from "./types";

export const ButtonComponent: React.FC<ButtonProps> = ({
  border = "blue",
  text,
  variant,
  color,
  size = "md",
  icon,
  onClickEvent,
  width = "content",
  className,
  onClick,
}) => {
  const buttonClass = classNames(
    classes.button,
    {
      [classes[`button_color_${color}`]]: color,
      [classes[`button_border_${border}`]]: border,
      [classes[`button_variant_${variant}`]]: variant,
      [classes[`button_size_${size}`]]: size,
      [classes[`button_width_${width}`]]: width,
    },
    className
  );

  return (
    <button className={buttonClass} onClick={onClick || onClickEvent}>
      <div className={classes.loader}></div>
      {icon && (
        <div className={classes.img_icon}>
          <img src={icon} alt="" />
        </div>
      )}
      {text && <span>{text}</span>}
    </button>
  );
};
