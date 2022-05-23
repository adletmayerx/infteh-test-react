import React from "react";
import styles from "./FolderContextMenu.module.css";
import { AnchorPointType } from "../../types";
import { ToolBarButton } from "..";

type FolderContextMenuType = {
  isOpen: boolean;
  anchorPoint: AnchorPointType;
  handleRenameButtonClick: () => void;
  handleDeleteFolderButtonClick: () => void;
  handleCreateFolderButtonClick: () => void;
  handleCreateFileButtonClick: () => void;
};

const FolderContextMenu = ({
  isOpen,
  anchorPoint,
  handleRenameButtonClick,
  handleDeleteFolderButtonClick,
  handleCreateFolderButtonClick,
  handleCreateFileButtonClick,
}: FolderContextMenuType) => {
  const onRenameButtonClick = () => {
    handleRenameButtonClick();
  };
  const onDeleteFolderButtonClick = () => {
    handleDeleteFolderButtonClick();
  };
  const onCreateFolderButtonClick = () => {
    handleCreateFolderButtonClick();
  };
  const onCreateFileButtonClick = () => {
    handleCreateFileButtonClick();
  };

  return (
    <>
      {isOpen && (
        <ul
          className={styles.menu}
          style={{
            top: anchorPoint.y,
            left: anchorPoint.x,
            position: "absolute",
          }}
        >
          <li className={styles["menu__item"]}>
            <ToolBarButton
              title={"Создать папку"}
              handleButtonClick={onCreateFolderButtonClick}
            />
          </li>
          <li className={styles["menu__item"]}>
            <ToolBarButton
              title={"Создать файл"}
              handleButtonClick={onCreateFileButtonClick}
            />
          </li>
          <li className={styles["menu__item"]}>
            <ToolBarButton
              title={"Удалить папку"}
              handleButtonClick={onDeleteFolderButtonClick}
            />
          </li>
          <li className={styles["menu__item"]}>
            <ToolBarButton
              title={"Переименовать"}
              handleButtonClick={onRenameButtonClick}
            />
          </li>
        </ul>
      )}
    </>
  );
};

export default FolderContextMenu;
