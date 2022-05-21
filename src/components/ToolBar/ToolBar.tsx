import React from "react";
import styles from "./ToolBar.module.css";
import { ToolBarButton } from "../index";
import { ToolBarType } from "../../types";

const ToolBar = ({
  handleRenameButtonClick,
  handleDeleteFolderButtonClick,
  handleDeleteFileButtonClick,
  handleCreateFolderButtonClick
}: ToolBarType) => {
  const handleNotImplentedButtonFunctionalityClick = () => {
    alert("функциональность не имплементирована :С");
  };
  
  return (
    <ul className={styles["tool-bar"]}>
      <ToolBarButton
        title={"Создать Папку"}
        handleButtonClick={handleCreateFolderButtonClick}
      />
      <ToolBarButton
        title={"Удалить Папку"}
        handleButtonClick={handleDeleteFolderButtonClick}
      />
      <ToolBarButton
        title={"Загрузить файл"}
        handleButtonClick={handleNotImplentedButtonFunctionalityClick}
      />
      <ToolBarButton
        title={"Скачать файл"}
        handleButtonClick={handleNotImplentedButtonFunctionalityClick}
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
