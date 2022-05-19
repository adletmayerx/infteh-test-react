import React, { useState, useEffect } from "react";
import styles from "./FolderComponent.module.css";
import { FolderComponentType, UnsortedDataType } from "../../types";
import FileComponent from "../FileComponent/FileComponent";
import arrowIcon from "../../img/folder-arrow-icon.svg";
import arrowIconIsOpen from "../../img/folder-arrow-icon-is-open.svg";
import folderIcon from "../../img/folder-icon.svg";
import folderIconIsOpen from "../../img/folder-icon-open.svg";

const FolderComponent = ({
  title,
  id,
  handleFolderComponentClick,
  children,
}: FolderComponentType) => {
  const [folders, setFolders] = useState([] as any);
  const [files, setFiles] = useState([] as any);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!children || children === []) {
      return;
    }
    setFolders(
      children?.filter((item: UnsortedDataType) => item.type === "folder")
    );
    setFiles(
      children?.filter((item: UnsortedDataType) => item.type === "file")
    );
  }, [children]);

  const onFolderComponentCLick = (event: any) => {
    event.stopPropagation();
    if (event.detail === 2) {
      setIsOpen(!isOpen);
    }
    handleFolderComponentClick(id);
  };

  return (
    <div className={styles.folder}>
      <div
        className={styles["folder__title-container"]}
        onClick={onFolderComponentCLick}
      >
        <img src={isOpen ? arrowIconIsOpen : arrowIcon} alt="arrow icon " />
        <img src={isOpen ? folderIconIsOpen : folderIcon} alt="fodler icon" />
        <h5 className={styles.folder__title}>{title}</h5>
      </div>
      {isOpen && (
        <div className={styles["folder__children"]}>
          {folders.map((folder: UnsortedDataType) => {
            return (
              <FolderComponent
                title={folder.title}
                id={folder.id}
                handleFolderComponentClick={handleFolderComponentClick}
                children={folder.children}
                key={folder.id}
              />
            );
          })}
          {files.map((file: UnsortedDataType) => {
            return (
              <FileComponent
                title={file.title}
                extension={file.extension}
                id={file.id}
                handleFileComponentClick={handleFolderComponentClick}
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
