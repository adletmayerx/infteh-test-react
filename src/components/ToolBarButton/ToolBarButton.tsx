import React from "react";
import styles from "./ToolBarButton.module.css";

type ToolBarButtonType = {
  title: string;
  handleButtonClick: () => void;
};

const ToolBarButton = ({ title }: ToolBarButtonType) => {
  return (
    <button type="button" className={styles.button}>
      {title}
    </button>
  );
};

export default ToolBarButton;
