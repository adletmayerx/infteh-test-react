import React from "react";
import styles from "./FileView.module.css";
import { Editor, OpenFile } from "../";
import { ExplorerDataType } from "../../types";

type FileViewType = {
  activeFile: ExplorerDataType;
  setActiveFile: (value: any) => void;
  openFiles: Array<ExplorerDataType>;
  handleOpenFileClick: (id: number) => void;
  handleOpenFileCloseButtonClick: (id: number) => void;
  handleFileRightClick: (e: MouseEvent) => void;
};

const FileView = ({
  activeFile,
  setActiveFile,
  openFiles,
  handleOpenFileClick,
  handleOpenFileCloseButtonClick,
}: FileViewType) => {
  return (
    <div className={styles["file-view"]}>
      {activeFile ? (
        <>
          <ul className={styles["file-view__open-files-list"]}>
            {openFiles.map((file: ExplorerDataType) => {
              return (
                <li
                  className={styles["file-view__open-files-list-item"]}
                  key={file.id}
                >
                  <OpenFile
                    title={file.title}
                    id={file.id}
                    extension={file.extension || ""}
                    activeFile={activeFile}
                    onClick={handleOpenFileClick}
                    onCloseButtonClick={handleOpenFileCloseButtonClick}
                  />
                </li>
              );
            })}
          </ul>

          <Editor activeFile={activeFile} setActiveFile={setActiveFile} />
        </>
      ) : (
        <div className={styles["file-view__no-active-files-banner"]}>
          <p>нет открытых файлов.</p>
          <p>
            для того, чтобы открыть файл кликните по нему два раза левой кнопкой
            мыши.
          </p>
        </div>
      )}
    </div>
  );
};

export default FileView;
