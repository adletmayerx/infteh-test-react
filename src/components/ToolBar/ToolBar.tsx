import React from "react";
import styles from "./ToolBar.module.css";
import { ToolBarButton } from "../index";
import { ToolBarType } from "../../types";

const ToolBar = ({
  handleRenameButtonClick,
  handleDeleteFolderButtonClick,
  handleDeleteFileButtonClick,
}: ToolBarType) => {
  return (
    <ul className={styles["tool-bar"]}>
      <ToolBarButton
        title={"Создать Папку"}
        handleButtonClick={handleRenameButtonClick}
      />
      <ToolBarButton
        title={"Удалить Папку"}
        handleButtonClick={handleDeleteFolderButtonClick}
      />
      <ToolBarButton
        title={"Загрузить файл"}
        handleButtonClick={handleRenameButtonClick}
      />
      <ToolBarButton
        title={"Скачать файл"}
        handleButtonClick={handleRenameButtonClick}
      />
      <ToolBarButton
        title={"Удалить файл"}
        handleButtonClick={handleDeleteFileButtonClick}
      />
      <ToolBarButton
        title={"Переименовать"}
        handleButtonClick={handleRenameButtonClick}
      />
    </ul>
  );
};

export default ToolBar;
