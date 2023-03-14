import React from "react";
import { ButtonComponent } from "../ButtonComponent/ButtonComponent";
import {
  BorderVariantEnum,
  ButtonColorTextEnum,
  ButtonSizeEnum,
  ButtonVariantEnum,
} from "../ButtonComponent/types";
import styles from "./styles.module.css";

type Props = {
  children: JSX.Element;
  onClose?: () => void;
  onClick?: () => void;
  buttonText?: string;
  hideButtons?: boolean;
};

const Modal: React.FC<Props> = ({
  children,
  onClose,
  onClick,
  buttonText = "",
  hideButtons = false,
}) => {
  console.log("Modal RENDER");
  return (
    <div className={styles.modal_bg}>
      <div className={styles.modal}>
        {children}
        {!hideButtons && (
          <div className={styles.modal_footer}>
            <div className={styles.modal_footer_button}>
              <ButtonComponent
                border={BorderVariantEnum.secondary}
                text="Cancel"
                variant={ButtonVariantEnum.outlined}
                color={ButtonColorTextEnum.quaternary}
                size={ButtonSizeEnum.mediumLarge}
                onClick={onClose}
                className="right-space-small"
              />
            </div>

            <div className={styles.modal__footerButton}>
              <ButtonComponent
                border={BorderVariantEnum.none}
                text={buttonText}
                variant={ButtonVariantEnum.danger}
                color={ButtonColorTextEnum.tertiary}
                size={ButtonSizeEnum.mediumLarge}
                onClickEvent={onClick}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
