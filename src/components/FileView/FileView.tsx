import React from "react";
import styles from "./FileView.module.css";
import { Editor } from "../";

const FileView = () => {
  return (
    <div className={styles["file-view"]}>
      <h1>
        <Editor />
      </h1>
    </div>
  );
};

export default FileView;
