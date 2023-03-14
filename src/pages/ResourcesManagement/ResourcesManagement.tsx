import React, { useEffect, useState } from "react";
import { ButtonComponent } from "../../components/ButtonComponent/ButtonComponent";
import {
  BorderVariantEnum,
  ButtonColorTextEnum,
  ButtonSizeEnum,
  ButtonVariantEnum,
} from "../../components/ButtonComponent/types";
import { NavPanel } from "../../components/NavPanel/NavPanel";
import Table from "../../components/Table";
import { resourceManagementTable } from "../../constants/userManagement";
import { Labels, USER_RESOURCE_TABLE } from "../../helpers/constants";
import WriteIcon from "../../assets/images/write.svg";
import CloseIcon from "../../assets/images/close.svg";
import ShowFileIcon from "../../assets/images/viewFile.svg";
import VerticalArrow from "../../assets/images/verticalResize.svg";

import classes from "./styles.module.css";
import { EventModelI } from "./types";
import { getAllNotApproveFile } from "../../app/file";
import { useDispatch } from "react-redux";
import { RootState } from "../../store";
import { useAppSelector } from "../../hooks";
export const ResourcesManagement = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const dispatch: any = useDispatch();
  const { files: fileInfo, totalCount } = useAppSelector(
    (state: RootState) => state.file
  );
  console.log(fileInfo, totalCount, "fileInfo");
  const title = "Resources management";

  const openPdfInNewWindow = (data: string) => {
    // TODO: save pdf,
    window.open(data);
  };

  useEffect(() => {
    dispatch(getAllNotApproveFile());
  }, [dispatch]);
  return (
    <div className={classes.container_resource_manager}>
      <div className={classes.info_field_resource_manager}>
        <NavPanel
          text={title}
          buttonReport={false}
          buttonNewUser={false}
          buttonCreateNewFile={true}
          searchInput={true}
          educationM1={false}
        />
        <div className={classes.table}>
          <Table
            // items={resourceManagementTable}
            items={fileInfo}
            loading={loading}
            headers={USER_RESOURCE_TABLE}
            img={VerticalArrow}
            renderTableItem={(item: EventModelI) => {
              return (
                <tr>
                  <td>
                    <div className={classes.file_container}>
                      <div className={classes.imageFile}>
                        <img src={ShowFileIcon} alt="" />
                      </div>
                      <div className={classes.name_container}>
                        <div className={classes.table_name}>
                          {item?.originalName || item?.name}
                        </div>
                        <ButtonComponent
                          border={BorderVariantEnum.primary}
                          text={Labels.openFile}
                          variant={ButtonVariantEnum.outlined}
                          color={ButtonColorTextEnum.primary}
                          size={ButtonSizeEnum.small}
                          onClick={() => openPdfInNewWindow(item.link)}
                        />
                      </div>
                    </div>
                  </td>

                  <td>
                    <div className={classes.posts_col}>
                      <ButtonComponent
                        border={BorderVariantEnum.primary}
                        text={Labels.approve}
                        variant={ButtonVariantEnum.outlined}
                        color={ButtonColorTextEnum.primary}
                        size={ButtonSizeEnum.medium}
                        icon={WriteIcon}
                        // onClickEvent={() => handleClickBanUser(item.id)}
                      />
                      <div className={classes.space}></div>
                      <ButtonComponent
                        border={BorderVariantEnum.secondary}
                        text={Labels.delete}
                        variant={ButtonVariantEnum.outlined}
                        color={ButtonColorTextEnum.secondary}
                        size={ButtonSizeEnum.medium}
                        icon={CloseIcon}
                        // onClickEvent={() => handleClickDeleteUser(item.id)}
                      />
                    </div>
                  </td>
                </tr>
              );
            }}
          />
        </div>
      </div>
    </div>
  );
};
