import React, { useState } from "react";
import { ReactComponent as Arrow } from "../../assets/images/arrowSelect.svg";
import clsx from "clsx";

import styles from "./styles.module.css";

interface Props {
  label: string;
  placeholder: string;
  classes?: string;
  classesInner?: string;
  type?: string;
  onChange: (param: { id: string; text: string }) => void;
  value?: string;
  data: { id: string; text: string }[];
}

const InputSelect: React.FC<Props> = ({
  label,
  placeholder = "choose",
  classes,
  classesInner,
  onChange,
  value,
  data = [],
}) => {
  const [isOpenList, setIsOpenList] = useState(false);
  return (
    <div className={clsx(styles.input)}>
      {label && <h4>{label}</h4>}
      <div
        onClick={() => setIsOpenList((prev) => !prev)}
        className={clsx(styles.input__main, classes)}
      >
        <span className={styles.value}>{value ? value : placeholder}</span>
        <Arrow
          className={clsx(styles.arrow, { [styles.openArrow]: isOpenList })}
        />
      </div>
      {isOpenList && (
        <div
          style={{ top: label ? "90px" : "62px" }}
          className={clsx(styles.dataList, classesInner)}
        >
          {data.map((item: any, index) => (
            <div
              key={index}
              onClick={() => {
                onChange(item);
                setIsOpenList(false);
              }}
              className={styles.dataItem}
            >
              {item?.text || item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default InputSelect;
