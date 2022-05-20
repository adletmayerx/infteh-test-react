import React, { useEffect, useState } from "react";
import styles from "./Explorer.module.css";
import { UnsortedDataType } from "../../types";
import FolderComponent from "../FolderComponent/FolderComponent";
import FileComponent from "../FileComponent/FileComponent";
import listToTree from "../../utils/list-to-tree";

type ExplorerType = {
  explorerData: Array<UnsortedDataType>;
  setSelectedId: (id: number) => void;
};

const Explorer = ({ explorerData, setSelectedId }: ExplorerType) => {
  const [folders, setFolders] = useState([] as any);
  const [files, setFiles] = useState([] as any);
  const [dataTree, setDataTree] = useState([] as any);

  useEffect(() => {
    setDataTree(listToTree(explorerData));
  }, [explorerData]);

  useEffect(() => {
    setFolders(
      dataTree?.filter((item: UnsortedDataType) => item.type === "folder")
    );
    setFiles(
      dataTree?.filter((item: UnsortedDataType) => item.type === "file")
    );
  }, [dataTree]);

  const handleExplorerItemClick = (id: number) => {
    setSelectedId(id);
  };
  return (
    <div className={styles.explorer}>
      {folders.map((folder: UnsortedDataType) => {
        return (
          <FolderComponent
            title={folder.title}
            id={folder.id}
            handleFolderComponentClick={handleExplorerItemClick}
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
            handleFileComponentClick={handleExplorerItemClick}
            key={file.id}
          />
        );
      })}
    </div>
  );
};

export default Explorer;
