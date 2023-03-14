import React from "react";
import { PostProps } from "./types";

import SimpleSlider from "../SlickSlider/SlickSlider";
import ArrowUp from "../../assets/svg/ArrowUp";
import ArrowDown from "../../assets/svg/ArrowDown";

import classes from "./styles.module.css";
import Chat from "../../assets/svg/Chat";

export const Post: React.FC<PostProps> = ({
  text,
  img,
  like,
  unlike,
  comment,
}) => {
  const longText = text.length > 960 ? `${text.substring(0, 960)}...` : text;
  const shortText = text.length > 450 ? `${text.substring(0, 450)}...` : text;

  // TODO: hardcode, get from redux
  const userId = "2";

  const isUserLike = like.find((item: string) => item === userId);
  const isUserUnlike = unlike.find((item: string) => item === userId);

  return (
    <div className={classes.container_post}>
      <div className={classes.main_text}>
        {img?.image?.length ? (
          shortText
        ) : (
          <>
            <span>{longText}</span>
            <div className={classes.space}></div>
            <div className={classes.more_description}>Show more</div>
          </>
        )}
      </div>
      {!!img?.image?.length && <SimpleSlider data={img} />}
      <div className={classes.footer_post}>
        <ArrowUp fill={isUserLike ? "green" : "#BFC7DB"} />
        <div className={classes.count_footer}>{like.length}</div>

        <ArrowDown fill={isUserUnlike ? "#EC5454" : "#BFC7DB"} />
        <div className={classes.chat_footer}>
          <Chat fill="#BFC7DB" />
          <div className={classes.count_footer}>{comment}</div>
        </div>
      </div>
    </div>
  );
};
