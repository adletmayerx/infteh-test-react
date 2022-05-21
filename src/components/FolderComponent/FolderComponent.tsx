import React, { useState, useEffect } from "react";
import styles from "./FolderComponent.module.css";
import { FolderComponentType, ExplorerDataType } from "../../types";
import FileComponent from "../FileComponent/FileComponent";
import cn from "classnames/bind";
import arrowIcon from "../../images/folder-arrow-icon.svg";
import arrowIconIsOpen from "../../images/folder-arrow-icon-is-open.svg";
import folderIcon from "../../images/folder-icon.svg";
import folderIconIsOpen from "../../images/folder-icon-open.svg";

const FolderComponent = ({
  title,
  id,
  handleFolderComponentClick,
  handleFileDoubleClick,
  children,
  selectedId,
  handleFolderRightClick,
  handleFileRightClick
}: FolderComponentType) => {
  const [folders, setFolders] = useState([] as any);
  const [files, setFiles] = useState([] as any);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!children || children === []) {
      return;
    }
    setFolders(
      children?.filter((item: ExplorerDataType) => item.type === "folder")
    );
    setFiles(
      children?.filter((item: ExplorerDataType) => item.type === "file")
    );
  }, [children]);

  const onFolderComponentClick = (e: any) => {
    e.stopPropagation();
    if (e.detail === 2) {
      setIsOpen(!isOpen);
    }
    handleFolderComponentClick(id);
  };

  const onFolderComponentRightClick = (e: any) => {
    handleFolderComponentClick(id);
    handleFolderRightClick(e);
  };

  return (
    <div className={styles.folder}>
      <div
        className={cn(styles["folder__title-container"], {
          [styles["folder__title-container_is_selected"]]: id === selectedId,
        })}
        onClick={onFolderComponentClick}
        onContextMenu={onFolderComponentRightClick}
      >
        <img src={isOpen ? arrowIconIsOpen : arrowIcon} alt="arrow icon " />
        <img src={isOpen ? folderIconIsOpen : folderIcon} alt="folder icon" />
        <h5 className={styles.folder__title}>{title}</h5>
      </div>
      {isOpen && (
        <div className={styles["folder__children"]}>
          {folders.map((folder: ExplorerDataType) => {
            return (
              <FolderComponent
                title={folder.title}
                id={folder.id}
                handleFolderComponentClick={handleFolderComponentClick}
                handleFolderRightClick={handleFolderRightClick}
                handleFileRightClick={handleFileRightClick}
                handleFileDoubleClick={handleFileDoubleClick}
                children={folder.children}
                selectedId={selectedId}
                key={folder.id}
              />
            );
          })}
          {files.map((file: ExplorerDataType) => {
            return (
              <FileComponent
                title={file.title}
                extension={file.extension}
                id={file.id}
                handleFileComponentClick={handleFolderComponentClick}
                handleFileDoubleClick={handleFileDoubleClick}
                handleFileRightClick={handleFileRightClick}
                selectedId={selectedId}
                key={file.id}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default FolderComponent;
