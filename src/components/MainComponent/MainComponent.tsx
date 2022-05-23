import React, { useContext } from "react";
import styles from "./MainComponent.module.css";
import { Explorer, FileView } from "../";
import selectedIdContext from "../../contexts/selected-id-context";
import { MainComponentType } from "../../types";

const MainComponent = ({
  explorerData,
  handleFileDoubleClick,
  openFiles,
  activeFile,
  setActiveFile,
  handleOpenFileClick,
  handleOpenFileCloseButtonClick,
  handleFolderRightClick,
  handleFileRightClick,
}: MainComponentType) => {
  const { selectedId, setSelectedId } = useContext(selectedIdContext);

  return (
    <main className={styles.main}>
      <Explorer
        explorerData={explorerData}
        setSelectedId={setSelectedId}
        selectedId={selectedId ? selectedId : -1}
        handleFileDoubleClick={handleFileDoubleClick}
        handleFolderRightClick={handleFolderRightClick}
        handleFileRightClick={handleFileRightClick}
      />
      <FileView
        activeFile={activeFile}
        setActiveFile={setActiveFile}
        openFiles={openFiles}
        handleOpenFileClick={handleOpenFileClick}
        handleOpenFileCloseButtonClick={handleOpenFileCloseButtonClick}
        handleFileRightClick={handleFileRightClick}
      />
    </main>
  );
};

export default MainComponent;
