import React, { useEffect, useState } from "react";
import styles from "./Explorer.module.css";
import { ExplorerDataType } from "../../types";
import FolderComponent from "../FolderComponent/FolderComponent";
import FileComponent from "../FileComponent/FileComponent";

type ExplorerType = {
  explorerData: Array<ExplorerDataType>;
};

const Explorer = ({ explorerData }: ExplorerType) => {
  const [folders, setFolders] = useState([] as any);
  const [files, setFiles] = useState([] as any);

  useEffect(() => {
    setFolders(
      explorerData?.filter((item: ExplorerDataType) => item.type === "folder")
    );
    setFiles(
      explorerData?.filter((item: ExplorerDataType) => item.type === "file")
    );
  }, [explorerData]);

  const handleFolderComponentClick = (id: number) => {
    console.log(id);
  };
  return (
    <div className={styles.explorer}>
      {folders.map((folder: ExplorerDataType) => {
        return (
          <FolderComponent
            title={folder.title}
            id={folder.id}
            handleFolderComponentClick={handleFolderComponentClick}
            children={folder.children }
            key={folder.id}
          />
        );
      })}
      {files.map((file: ExplorerDataType) => {
        return (
          <FileComponent
            title={file.title}
            id={file.id}
            handleFileComponentClick={handleFolderComponentClick}
            key={file.id}
          />
        );
      })}
    </div>
  );
};

export default Explorer;
