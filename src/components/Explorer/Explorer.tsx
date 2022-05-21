import React, { useEffect, useState } from "react";
import styles from "./Explorer.module.css";
import { ExplorerDataType } from "../../types";
import FolderComponent from "../FolderComponent/FolderComponent";
import FileComponent from "../FileComponent/FileComponent";
import listToTree from "../../utils/list-to-tree";

type ExplorerType = {
  explorerData: Array<ExplorerDataType>;
  setSelectedId: (id: number) => void;
  selectedId: number;
  handleFileDoubleClick: () => void;
};

const Explorer = ({
  explorerData,
  setSelectedId,
  selectedId,
  handleFileDoubleClick,
}: ExplorerType) => {
  const [folders, setFolders] = useState([] as any);
  const [files, setFiles] = useState([] as any);
  const [dataTree, setDataTree] = useState([] as any);

  useEffect(() => {
    setDataTree(listToTree(explorerData));
  }, [explorerData]);

  useEffect(() => {
    setFolders(
      dataTree?.filter((item: ExplorerDataType) => item.type === "folder")
    );
    setFiles(
      dataTree?.filter((item: ExplorerDataType) => item.type === "file")
    );
  }, [dataTree]);

  const handleExplorerItemClick = (id: number) => {
    setSelectedId(id);
  };
  return (
    <div className={styles.explorer}>
      {folders.map((folder: ExplorerDataType) => {
        return (
          <FolderComponent
            title={folder.title}
            id={folder.id}
            handleFolderComponentClick={handleExplorerItemClick}
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
            handleFileComponentClick={handleExplorerItemClick}
            handleFileDoubleClick={handleFileDoubleClick}
            selectedId={selectedId}
            key={file.id}
          />
        );
      })}
    </div>
  );
};

export default Explorer;
