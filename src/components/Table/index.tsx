import React, { FC } from "react";

import styles from "./styles.module.css";
import { Oval } from "react-loader-spinner";

type Props = {
  headers: { title: string; percent?: string; hasIcon?: boolean }[] | string[];
  items: any[];
  renderTableItem: (item: any, index: number) => any;
  loading?: boolean;
  img?: string;
};

const Table: FC<Props> = ({
  headers,
  items,
  renderTableItem,
  loading,
  img,
}) => {
  return (
    <div className={styles.container}>
      <table>
        <thead className={styles.header}>
          <tr>
            {headers.map((item) =>
              typeof item === "string" ? (
                <th>{item}</th>
              ) : (
                <th
                  style={{
                    width: !!item.percent ? item.percent : "auto",
                  }}
                >
                  {!!img && !!item.hasIcon && (
                    <img src={img} alt="" className={styles.imgRightSpace} />
                  )}
                  {item.title}
                </th>
              )
            )}
          </tr>
        </thead>

        {!loading && (
          <tbody>
            {items.map((item, index) => {
              return renderTableItem(item, index);
            })}
          </tbody>
        )}
      </table>

      {loading && (
        <div className={styles.loader}>
          <Oval
            height={30}
            width={80}
            color="black"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="oval-loading"
            secondaryColor="#F5ECE9"
            strokeWidth={6}
            strokeWidthSecondary={6}
          />
        </div>
      )}
    </div>
  );
};
export default Table;
