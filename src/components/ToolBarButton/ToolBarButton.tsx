import React from "react";
import styles from "./ToolBarButton.module.css";

type ToolBarButtonType = {
  title: string;
  handleButtonClick: () => void;
};

const ToolBarButton = ({ title, handleButtonClick }: ToolBarButtonType) => {
  return (
    <button type="button" className={styles.button} onClick={handleButtonClick}>
      {title}
    </button>
  );
};

export default ToolBarButton;
