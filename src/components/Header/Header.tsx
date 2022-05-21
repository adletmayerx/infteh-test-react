import React from "react";
import styles from "./Header.module.css";
import { ToolBar } from "../index";
import { HeaderType } from "../../types";

const Header = ({
  handleRenameButtonClick,
  handleDeleteFolderButtonClick,
  handleDeleteFileButtonClick,
  handleCreateFolderButtonClick
}: HeaderType) => {
  return (
    <header className={styles.header}>
      <ToolBar
        handleRenameButtonClick={handleRenameButtonClick}
        handleDeleteFolderButtonClick={handleDeleteFolderButtonClick}
        handleDeleteFileButtonClick={handleDeleteFileButtonClick}
        handleCreateFolderButtonClick={handleCreateFolderButtonClick}
      />
    </header>
  );
};

export default Header;
