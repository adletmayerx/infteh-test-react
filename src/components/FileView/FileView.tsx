import React from "react";
import styles from "./FileView.module.css";
import { Editor } from "../";
import { ExplorerDataType } from "../../types";

type FileViewType = {
  activeFile: ExplorerDataType;
};

const FileView = ({ activeFile }: FileViewType) => {
  return (
    <div className={styles["file-view"]}>
      <Editor activeFile={activeFile} />
    </div>
  );
};

export default FileView;
