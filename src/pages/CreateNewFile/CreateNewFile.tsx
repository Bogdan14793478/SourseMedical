import React, { ChangeEvent, useRef, useState } from "react";
import { NavPanel } from "../../components/NavPanel/NavPanel";
import { Labels } from "../../helpers/constants";
import ArrowLeft from "../../assets/images/arrowLeft.svg";
import ClipFile from "../../assets/images/clipFile.svg";

import classes from "./styles.module.css";
import { useNavigate } from "react-router-dom";
import InputSelect from "../../components/InputSelect";
import { ButtonComponent } from "../../components/ButtonComponent/ButtonComponent";
import {
  BorderVariantEnum,
  ButtonColorTextEnum,
  ButtonSizeEnum,
  ButtonVariantEnum,
} from "../../components/ButtonComponent/types";
import { prepearInfoToSend } from "../../helpers/helpers";

const data = [
  { text: "first", id: "1" },
  { text: "second", id: "2" },
  { text: "third", id: "3" },
];
export const CreateNewFile = () => {
  const [chooseCategory, setChooseCategory] = useState<{
    text: string;
    id: string;
  }>();
  const [file, setFile] = useState<File>();
  const inputRef = useRef<HTMLInputElement | null>(null);

  const navigate = useNavigate();

  const backToAllFiles = () => {
    navigate("/resources-management");
  };

  const chooseSelectCategory = (item: any) => {
    console.log(item, "item");
    setChooseCategory(item);
  };

  // emulate click on on input
  const handleUploadClick = () => {
    inputRef.current?.click();
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log("Click");
    if (!e.target.files) {
      return;
    }
    setFile(e.target.files[0]);
  };

  const handleSendData = () => {
    if (chooseCategory?.text && file) {
      const result = prepearInfoToSend(chooseCategory.text, file);
      if (result) {
        // do notife
      }
    }
  };

  const handleCanсel = () => {
    setFile(undefined);
    setChooseCategory(undefined);
    backToAllFiles();
  };

  return (
    <div className={classes.container_create_file}>
      <div className={classes.info_field}>
        <img
          onClick={backToAllFiles}
          className={classes.arrow_left}
          src={ArrowLeft}
          alt="arrowLeft"
        />
        <NavPanel
          text={Labels.AddNewFile}
          buttonReport={false}
          buttonNewUser={false}
          buttonCreateNewFile={false}
          searchInput={false}
        />
        <InputSelect
          data={data}
          label="Category"
          placeholder="Choose category"
          onChange={chooseSelectCategory}
          value={chooseCategory?.text}
          classes={classes.selector_width}
          classesInner={classes.space_width}
        />
        <div className={classes.container_load_file}>
          <ButtonComponent
            size={ButtonSizeEnum.small}
            border={BorderVariantEnum.quaternary}
            color={ButtonColorTextEnum.quinary}
            text={Labels.addFile}
            variant={ButtonVariantEnum.outlined}
            icon={ClipFile}
            onClick={handleUploadClick}
            className="right-space-small"
          />

          <input
            ref={inputRef}
            onChange={handleFileChange}
            className={classes.input_file}
            type="file"
          />
          <span className={classes.label_text}>
            {!!file?.name && file?.name}
          </span>
        </div>

        <div className={classes.button_group}>
          <ButtonComponent
            size={ButtonSizeEnum.verylarge}
            border={BorderVariantEnum.quaternary}
            color={ButtonColorTextEnum.tertiary}
            text={Labels.save}
            variant={ButtonVariantEnum.contained}
            onClick={handleSendData}
            className="right-space-small"
          />
          <ButtonComponent
            size={ButtonSizeEnum.verylarge}
            border={BorderVariantEnum.primary}
            color={ButtonColorTextEnum.primary}
            text={Labels.cancel}
            variant={ButtonVariantEnum.outlined}
            onClick={handleCanсel}
            className="right-space-small"
          />
        </div>
      </div>
    </div>
  );
};
