import React from "react";
import DownloadSvg from "../../assets/images/download.svg";
import PlusIcon from "../../assets/images/plusSquare.svg";
import EducationM1 from "../../assets/images/educationM1.svg";
import { SearchInput } from "../SearchInput/SearchInput";
import {
  BorderVariantEnum,
  ButtonColorTextEnum,
  ButtonSizeEnum,
  ButtonVariantEnum,
} from "../ButtonComponent/types";
import { ButtonComponent } from "../ButtonComponent/ButtonComponent";
import { Labels } from "../../helpers/constants";
import { Avatar } from "../Avatar/Avatar";
import { SizeAvatar } from "../Avatar/types";

import classes from "./styles.module.css";
import { useNavigate } from "react-router-dom";

type NavPanelProps = {
  sizeAvatar?: SizeAvatar;
  avatar?: string;
  text: string;
  buttonReport: boolean;
  buttonNewUser: boolean;
  buttonCreateNewFile: boolean;
  searchInput: boolean;
  educationM1?: boolean;
};
export const NavPanel: React.FC<NavPanelProps> = ({
  text,
  avatar,
  sizeAvatar,
  buttonReport = false,
  buttonNewUser = false,
  buttonCreateNewFile = false,
  searchInput = false,
  educationM1 = false,
}) => {
  const navigate = useNavigate();
  const handleDownload = () => {
    console.log("Click");
  };

  const hanldeClickCreateFile = () => {
    navigate("/add-file");
  };
  return (
    <div className={classes.container}>
      <div className={classes.wrapper_left}>
        {avatar && (
          <Avatar img={avatar} size={sizeAvatar} className="right-space" />
        )}
        <div className={classes.title}>{text}</div>
      </div>
      <div className={classes.button_wrap}>
        {buttonReport && (
          <ButtonComponent
            size={ButtonSizeEnum.large}
            border={BorderVariantEnum.none}
            color={ButtonColorTextEnum.tertiary}
            text={Labels.DownloadReport}
            variant={ButtonVariantEnum.contained}
            icon={DownloadSvg}
            onClick={handleDownload}
            className="right-space"
          />
        )}

        {buttonNewUser && (
          <ButtonComponent
            size={ButtonSizeEnum.large}
            border={BorderVariantEnum.none}
            color={ButtonColorTextEnum.tertiary}
            text={Labels.AddNewUser}
            variant={ButtonVariantEnum.contained}
            icon={PlusIcon}
            onClick={handleDownload}
            className="right-space"
          />
        )}

        {buttonCreateNewFile && (
          <ButtonComponent
            size={ButtonSizeEnum.large}
            border={BorderVariantEnum.none}
            color={ButtonColorTextEnum.tertiary}
            text={Labels.CreateNewFile}
            variant={ButtonVariantEnum.contained}
            icon={PlusIcon}
            onClick={hanldeClickCreateFile}
            className="right-space"
          />
        )}
        {educationM1 && <img src={EducationM1} alt="m1" />}

        {searchInput && <SearchInput />}
      </div>
    </div>
  );
};
