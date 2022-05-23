import React from "react";
import styles from "./FileContextMenu.module.css";
import { AnchorPointType } from "../../types";
import { ToolBarButton } from "../index";

type FileContextMenuType = {
  isOpen: boolean;
  anchorPoint: AnchorPointType;
  handleRenameButtonClick: () => void;
  handleDeleteFileButtonClick: () => void;
  closeAllContextMenus: () => void;
};

const FileContextMenu = ({
  isOpen,
  anchorPoint,
  handleRenameButtonClick,
  handleDeleteFileButtonClick,
  closeAllContextMenus
}: FileContextMenuType) => {
  const onRenameButtonClick = () => {
    closeAllContextMenus();

    handleRenameButtonClick()
  }
  const onDeleteFileButtonClick = () => {
    closeAllContextMenus();

    handleDeleteFileButtonClick()
  }

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
          <li className={styles.menu__item}>
            <ToolBarButton
              title={"Удалить файл"}
              handleButtonClick={onDeleteFileButtonClick}
            />
          </li>
          <li className={styles.menu__item}>
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

export default FileContextMenu;
