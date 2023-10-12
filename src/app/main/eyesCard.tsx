import React from "react";
import Image from "next/image";
import localeyeImg from "@/eyes/eyes01.png";
import styles from "./test.module.css";

import { VisibilityContext } from "react-horizontal-scrolling-menu";

export function EyesCard({
  itemId,
  selected,
  onClick,
  title,
}: {
  itemId: string;
  selected: boolean;
  onClick: Function;
  title: string;
}) {
  const visibility = React.useContext(VisibilityContext);

  const visible = visibility.isItemVisible(itemId);

  return (
    <div
      onClick={() => onClick()}
      role="button"
      style={{
        border: selected ? "2px solid blue" : "1px solid black",
        display: "inline-block",
        borderRadius: "5px",
        margin: "0 10px",
        width: "160px",
        height: "120px",
        padding: "40px",
        userSelect: "none",
        backgroundColor: "white",
      }}
      tabIndex={0}
      //   className="card"
      className={styles.gridItem}
    >
      <Image src={localeyeImg} alt="目" className={styles.img}></Image>
    </div>
  );
}
