import { useNavigate, useLocation } from "react-router-dom";
import MyPhoto from "../../assets/images/photoPerson.jpeg";
import ArrowLeft from "../../assets/images/arrowLeft.svg";
import { NavPanel } from "../../components/NavPanel/NavPanel";
import { posts } from "../../constants/userManagement";

import classes from "./styles.module.css";
import { Post } from "../../components/Post/Post";
import { PostProps } from "../../components/Post/types";

export const User = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const name = location.pathname.slice(17);

  const backToAllUser = () => {
    navigate("/user-management");
  };

  return (
    <div className={classes.container_user}>
      <div className={classes.info_field}>
        <img
          onClick={backToAllUser}
          className={classes.arrow_left}
          src={ArrowLeft}
          alt="arrowLeft"
        />
        <NavPanel
          avatar={MyPhoto}
          sizeAvatar="large"
          text={name}
          buttonReport={false}
          buttonNewUser={false}
          buttonCreateNewFile={false}
          searchInput={false}
          educationM1={true}
        />
        <div className={classes.user_post_title}>User posts</div>
        <div className={classes.flex_posts}>
          {posts?.map((item: PostProps, i) => (
            <Post
              key={i}
              img={item?.img}
              text={item?.text}
              like={item?.like}
              unlike={item?.unlike}
              comment={item?.comment}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
