import React from "react";
import styles from "./FileComponent.module.css";
import { FileComponentType } from "../../types";

const FileComponent = ({
  title,
  extension,
  id,
  handleFileComponentClick,
}: FileComponentType) => {
  const onFileComponentCLick = () => {
    handleFileComponentClick(id);
  };

  return (
    <div className={styles.file} onClick={onFileComponentCLick}>
      <h5 className={styles.file__title}>
        {title}
        {extension ? `.${extension}` : ""}
      </h5>
    </div>
  );
};

export default FileComponent;
