import React from "react";
import styles from "./ToolBar.module.css";
import { ToolBarButton } from "../index";
import { ToolBarType } from "../../types";

const ToolBar = ({
  handleRenameButtonClick,
  handleDeleteFolderButtonClick,
  handleDeleteFileButtonClick,
  handleCreateFolderButtonClick,
  handleCreateFileButtonClick,
}: ToolBarType) => {
  const handleNotImplentedButtonFunctionalityClick = () => {
    alert("функциональность не имплементирована :С");
  };

  return (
    <ul className={styles["tool-bar"]}>
      <li className={styles["tool-bar__item"]}>
        <ToolBarButton
          title={"Создать папку"}
          handleButtonClick={handleCreateFolderButtonClick}
        />
      </li>
      <li className={styles["tool-bar__item"]}>
        <ToolBarButton
          title={"Создать файл"}
          handleButtonClick={handleCreateFileButtonClick}
        />
      </li>
      <li className={styles["tool-bar__item"]}>
        <ToolBarButton
          title={"Удалить папку"}
          handleButtonClick={handleDeleteFolderButtonClick}
        />
      </li>

      <li className={styles["tool-bar__item"]}>
        <ToolBarButton
          title={"Удалить файл"}
          handleButtonClick={handleDeleteFileButtonClick}
        />
      </li>
      <li className={styles["tool-bar__item"]}>
        <ToolBarButton
          title={"Переименовать"}
          handleButtonClick={handleRenameButtonClick}
        />
      </li>
      <li className={styles["tool-bar__item"]}>
        <ToolBarButton
          title={"Загрузить файл"}
          handleButtonClick={handleNotImplentedButtonFunctionalityClick}
        />
      </li>
      <li className={styles["tool-bar__item"]}>
        <ToolBarButton
          title={"Скачать файл"}
          handleButtonClick={handleNotImplentedButtonFunctionalityClick}
        />
      </li>
    </ul>
  );
};

export default ToolBar;
