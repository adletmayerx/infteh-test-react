import React from "react";
import styles from "./Header.module.css";
import { ToolBar } from "../index";
import { HeaderType } from "../../types";

const Header = ({
  handleRenameButtonClick,
  handleDeleteFolderButtonClick,
  handleDeleteFileButtonClick,
  handleCreateFolderButtonClick,
  handleCreateFileButtonClick
}: HeaderType) => {
  return (
    <header className={styles.header}>
      <ToolBar
        handleRenameButtonClick={handleRenameButtonClick}
        handleDeleteFolderButtonClick={handleDeleteFolderButtonClick}
        handleDeleteFileButtonClick={handleDeleteFileButtonClick}
        handleCreateFolderButtonClick={handleCreateFolderButtonClick}
        handleCreateFileButtonClick={handleCreateFileButtonClick}
      />
    </header>
  );
};

export default Header;
