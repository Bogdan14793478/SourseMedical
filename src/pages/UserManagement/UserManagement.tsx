import React, { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavPanel } from "../../components/NavPanel/NavPanel";
import Table from "../../components/Table";
import { Labels, USER_MANAGEMENT_TABLE } from "../../helpers/constants";
import WriteIcon from "../../assets/images/write.svg";
import CloseIcon from "../../assets/images/close.svg";

import classes from "./styles.module.css";
import { ButtonComponent } from "../../components/ButtonComponent/ButtonComponent";
import {
  BorderVariantEnum,
  ButtonColorTextEnum,
  ButtonSizeEnum,
  ButtonVariantEnum,
} from "../../components/ButtonComponent/types";
import { EventModelI } from "./types";
import Modal from "../../components/Modal";
import { getAllUser } from "../../app/auth";
import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";
import { RootState } from "../../store";
import { Loader } from "../../components/Loader/Loader";
import { deleteChooseUser } from "../../app/users";
import { BanModal } from "../../components/BanModal/BanModal";

export const UserManagement = () => {
  const [loading, setLoading] = useState(false);
  const [openModalBan, setOpenModalBan] = useState(false);
  const [openModalDelete, setOpenModalDelete] = useState(false);

  // Use chooseUser to save id when ban or delete
  const [chooseUser, setChooseUser] = useState<string | null>("");

  const [isChecked, setIsChecked] = useState<number>(0);
  const inputBan = useRef<HTMLInputElement | null>(null);

  const dispatch: any = useDispatch();

  const users = useSelector((state: RootState) => state.user.users);

  const navigate = useNavigate();

  const handleClickViewPost = useCallback((name: string) => {
    navigate(`/user-management/${name}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // open modal ban
  const handleClickBanUser = useCallback((id: string) => {
    setOpenModalBan(true);
    setChooseUser(id);
  }, []);

  // ban user
  const handleClickBan = () => {
    setLoading(true);
    const arrChecked: number[] = [isChecked];
    if (!!inputBan.current) {
      // Send
      console.log(inputBan.current.value, "value");
      console.log(arrChecked, "arrChecked");
    } else {
      // Send
      console.log(arrChecked, "arrChecked");
    }
    setOpenModalBan(false);
    setIsChecked(0);
    setLoading(false);
  };

  // open modal delete user
  const handleClickDeleteUser = useCallback((id: string) => {
    setOpenModalDelete(true);
    setChooseUser(id);
  }, []);

  const handleDeleteUser = () => {
    setLoading(true);
    deleteChooseUser(chooseUser);
    setChooseUser(null);
    setOpenModalDelete(false);
    setLoading(false);
  };

  const closeBanModal = () => {
    setOpenModalBan(false);
    setIsChecked(0);
    setChooseUser(null);
  };

  useEffect(() => {
    // dispatch(getAllAdmin());
    dispatch(getAllUser());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    console.log("Page user-management load");
  }, []);

  // const handleClick = () => {
  //   console.log("Click");
  //   getAllUser();
  // };

  return (
    <div className={classes.container}>
      <div className={classes.info_field}>
        {/* {(loading || !users.length) && <Loader />} */}
        {/* <button onClick={handleClick}>+</button> */}
        <NavPanel
          text={Labels.UserManagement}
          buttonReport={true}
          buttonNewUser={true}
          buttonCreateNewFile={false}
          searchInput={true}
        />
        <div className={classes.table}>
          <Table
            // items={userManagement} - moc data
            items={users}
            loading={loading}
            headers={USER_MANAGEMENT_TABLE}
            renderTableItem={(item: EventModelI) => {
              return (
                <tr>
                  <td>
                    <div
                      className={clsx(classes.table_row, classes.table_date)}
                    >
                      {/* {item?.time} */}
                    </div>
                  </td>
                  <td>
                    <div
                      onClick={() => handleClickViewPost(item.username)}
                      className={clsx(classes.table_row, classes.table_name)}
                    >
                      {item?.username}
                      {/* {item.?full_name} - moc */}
                    </div>
                  </td>
                  <td>
                    <div
                      className={clsx(classes.table_row, classes.table_email)}
                    >
                      {item?.email}
                    </div>
                  </td>
                  <td>
                    <div className={classes.posts_col}>
                      <div
                        className={clsx(classes.table_row, classes.table_email)}
                      >
                        {/* {item?.posts?.count} */}
                      </div>
                      <div>
                        <ButtonComponent
                          border={BorderVariantEnum.primary}
                          text={Labels.viewPosts}
                          variant={ButtonVariantEnum.outlined}
                          color={ButtonColorTextEnum.primary}
                          size={ButtonSizeEnum.small}
                          onClick={() => handleClickViewPost(item.username)}
                        />
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className={classes.posts_col}>
                      <ButtonComponent
                        border={BorderVariantEnum.primary}
                        text={Labels.ban}
                        variant={ButtonVariantEnum.outlined}
                        color={ButtonColorTextEnum.primary}
                        size={ButtonSizeEnum.medium}
                        icon={WriteIcon}
                        onClickEvent={() => handleClickBanUser(item.id)}
                      />
                      <div className={classes.space}></div>
                      <ButtonComponent
                        border={BorderVariantEnum.secondary}
                        text={Labels.delete}
                        variant={ButtonVariantEnum.outlined}
                        color={ButtonColorTextEnum.secondary}
                        size={ButtonSizeEnum.medium}
                        icon={CloseIcon}
                        onClickEvent={() => handleClickDeleteUser(item.id)}
                      />
                    </div>
                  </td>
                </tr>
              );
            }}
          />
        </div>
      </div>
      {openModalBan && (
        <BanModal
          handleClickBan={handleClickBan}
          closeBanModal={closeBanModal}
          isChecked={isChecked}
          setIsChecked={setIsChecked}
          inputBan={inputBan}
        />
      )}
      {openModalDelete && (
        <Modal
          buttonText={Labels.delete}
          onClick={handleDeleteUser}
          onClose={() => setOpenModalDelete(false)}
        >
          <div>
            <div className={classes.modal_title}>{Labels.titleModalDelete}</div>
            <div className={classes.modal_text}>{Labels.textModalDelete}</div>
          </div>
        </Modal>
      )}

      <div></div>
    </div>
  );
};
