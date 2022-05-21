import React from "react";
import styles from "./FileComponent.module.css";
import { FileComponentType } from "../../types";
import cn from "classnames/bind";

const FileComponent = ({
  title,
  extension,
  id,
  handleFileComponentClick,
  selectedId,
  handleFileDoubleClick,
  handleFileRightClick,
}: FileComponentType) => {
  const onFileComponentCLick = (e: any) => {
    e.stopPropagation();
    if (e.detail === 2) {
      handleFileDoubleClick();
    }
    handleFileComponentClick(id);
  };

  const onFileComponentRightClick = (e: any) => {
    handleFileComponentClick(id);
    handleFileRightClick(e);
  };

  return (
    <div
      className={cn(styles["file"], {
        [styles["file_is_selected"]]: id === selectedId,
      })}
      onClick={onFileComponentCLick}
      onContextMenu={onFileComponentRightClick}
    >
      <h5 className={styles.file__title}>
        {title}
        {extension ? `.${extension}` : ""}
      </h5>
    </div>
  );
};

export default FileComponent;
