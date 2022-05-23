import React, { useState, useEffect } from "react";
import styles from "./App.module.css";
import {
  Header,
  MainComponent,
  PopupRename,
  PopupCreateFolder,
  PopupSaveFile,
  PopupCreateFile,
  FolderContextMenu,
  FileContextMenu,
} from "./components";
import { ExplorerDataType } from "./types";
import selectedIdContext from "./contexts/selected-id-context";
import FolderItem from "./utils/FolderClass";
import FileItem from "./utils/FileClass";
import { explorerDataUnsorted } from "./utils/constants";

function App() {
  const [array, setArray] = useState(explorerDataUnsorted);

  const [selectedId, setSelectedId] = useState(null) as any;
  const [selectedExplorerDataItem, setSelectedExplorerDataItem] = useState(
    null
  ) as any;

  const [popupRenameIsOpen, setPopupRenameIsOpen] = useState(false);
  const [popupCreateFolderIsOpen, setPopupCreateFolderIsOpen] = useState(false);
  const [popupCreateFileIsOpen, setPopupCreateFileIsOpen] = useState(false);
  const [popupSaveFileIsOpen, setPopupSaveFileIsOpen] = useState(false);

  const [folderContextMenuIsOpen, setFolderContextMenuIsOpen] = useState(false);
  const [fileContextMenuIsOpen, setFileContextMenuIsOpen] = useState(false);

  const [anchorPoint, setAnchorPoint] = useState(null) as any;

  const [openFiles, setOpenFiles] = useState([]) as any;
  const [activeFile, setActiveFile] = useState(null) as any;

  const handleDeleteFolderButtonClick = () => {
    if (selectedExplorerDataItem.type === "file") {
      return;
    }
    setArray(array.filter((item) => item.id !== selectedId));
  };

  const handleDeleteFileButtonClick = () => {
    if (selectedExplorerDataItem.type === "folder") {
      return;
    }
    setArray(array.filter((item) => item.id !== selectedId));
  };

  const handleFileDoubleClick = () => {
    if (
      openFiles.some(
        (file: ExplorerDataType) => file.id === selectedExplorerDataItem.id
      )
    ) {
      return;
    }
    setOpenFiles([...openFiles, selectedExplorerDataItem]);
  };

  const handleFolderRightClick = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setAnchorPoint({ x: e.pageX, y: e.pageY });
    setFileContextMenuIsOpen(false);
    setFolderContextMenuIsOpen(true);
  };

  const handleFileRightClick = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setAnchorPoint({ x: e.pageX, y: e.pageY });
    setFolderContextMenuIsOpen(false);
    setFileContextMenuIsOpen(true);
  };

  const handleOpenFileClick = (id: number) => {
    if (id === activeFile) {
      return;
    }
    setActiveFile(openFiles.find((file: ExplorerDataType) => file.id === id));
  };

  const handleRenameButtonClick = () => {
    if (!selectedExplorerDataItem) {
      return;
    }
    setPopupRenameIsOpen(true);
  };

  const handleCreateFolderButtonClick = () => {
    setPopupCreateFolderIsOpen(true);
  };

  const handleCreateFileButtonClick = () => {
    setPopupCreateFileIsOpen(true);
  };

  const handleOpenFileCloseButtonClick = () => {
    if (
      array.find((item) => item.id === activeFile.id)?.value ===
      activeFile.value
    ) {
      setOpenFiles(
        openFiles.filter((file: ExplorerDataType) => file.id !== activeFile.id)
      );
      return;
    }

    setPopupSaveFileIsOpen(true);
  };

  const closeAllPopups = () => {
    setPopupRenameIsOpen(false);
    setPopupCreateFolderIsOpen(false);
    setPopupCreateFileIsOpen(false);
    setPopupSaveFileIsOpen(false);
  };

  const handleRenamePopupFormSubmit = (newName: string) => {
    if (selectedExplorerDataItem.type === "file") {
      const [name, extension] = newName.split(".");
      setArray(
        array.map((item) => {
          return item.id === selectedId
            ? { ...item, title: name, extension: extension }
            : item;
        })
      );
      setOpenFiles(
        openFiles.map((file: ExplorerDataType) => {
          return file.id === selectedId
            ? { ...file, title: name, extension: extension }
            : file;
        })
      );
    } else {
      setArray(
        array.map((item) => {
          return item.id === selectedId ? { ...item, title: newName } : item;
        })
      );
    }

    closeAllPopups();
  };

  const handlPopupCreateFolderSubmit = (title: string) => {
    if (!selectedId) {
      const newFolder = new FolderItem(title);
      setArray([...array, newFolder]);
    } else {
      const parentId =
        selectedExplorerDataItem.type === "file"
          ? selectedExplorerDataItem.parentId
          : selectedExplorerDataItem.id;

      const newFolder = new FolderItem(title, parentId);
      setArray([...array, newFolder]);
    }
    closeAllPopups();
  };

  const handlPopupCreateFileSubmit = (title: string) => {
    if (!selectedId) {
      const newFile = new FileItem(title);
      setArray([...array, newFile]);
    } else {
      const parentId =
        selectedExplorerDataItem.type === "file"
          ? selectedExplorerDataItem.parentId
          : selectedExplorerDataItem.id;

      const newFile = new FileItem(title, parentId);
      setArray([...array, newFile]);
      setOpenFiles([...openFiles, newFile]);
    }
    closeAllPopups();
  };

  const handlePopupSaveFileSubmit = () => {
    setArray(
      array.map((item: ExplorerDataType) =>
        item.id === activeFile.id
          ? { ...item, value: activeFile.value.toString() }
          : item
      )
    );

    setOpenFiles(
      openFiles.filter((file: ExplorerDataType) => file.id !== activeFile.id)
    );

    closeAllPopups();
  };

  const handlePopupSaveFileSubmitNoButtonClick = () => {
    setOpenFiles(
      openFiles.filter((file: ExplorerDataType) => file.id !== activeFile.id)
    );

    closeAllPopups();
  };

  useEffect(() => {
    if (!selectedId) {
      return;
    }
    setSelectedExplorerDataItem(array.find((item) => item.id === selectedId));
  }, [array, selectedId]);

  useEffect(() => {
    setActiveFile(openFiles[openFiles.length - 1]);
  }, [openFiles]);

  const closeAllContextMenus = () => {
    setFolderContextMenuIsOpen(false);
    setFileContextMenuIsOpen(false);
  };

  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      closeAllContextMenus();
    };

    const handleClick = () => {
      setFolderContextMenuIsOpen(false);
      setFileContextMenuIsOpen(false);
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div className={styles.app}>
      <selectedIdContext.Provider value={{ selectedId, setSelectedId }}>
        <Header
          handleRenameButtonClick={handleRenameButtonClick}
          handleDeleteFolderButtonClick={handleDeleteFolderButtonClick}
          handleDeleteFileButtonClick={handleDeleteFileButtonClick}
          handleCreateFolderButtonClick={handleCreateFolderButtonClick}
          handleCreateFileButtonClick={handleCreateFileButtonClick}
        />

        <MainComponent
          explorerData={array}
          handleFileDoubleClick={handleFileDoubleClick}
          openFiles={openFiles}
          activeFile={activeFile}
          setActiveFile={setActiveFile}
          handleOpenFileClick={handleOpenFileClick}
          handleOpenFileCloseButtonClick={handleOpenFileCloseButtonClick}
          handleFolderRightClick={handleFolderRightClick}
          handleFileRightClick={handleFileRightClick}
        />

        {selectedExplorerDataItem && (
          <PopupRename
            handleSubmit={handleRenamePopupFormSubmit}
            isOpen={popupRenameIsOpen}
            onClose={closeAllPopups}
            selectedExplorerDataItem={selectedExplorerDataItem}
          />
        )}

        <PopupCreateFolder
          handleSubmit={handlPopupCreateFolderSubmit}
          isOpen={popupCreateFolderIsOpen}
          onClose={closeAllPopups}
        />

        <PopupCreateFile
          handleSubmit={handlPopupCreateFileSubmit}
          isOpen={popupCreateFileIsOpen}
          onClose={closeAllPopups}
        />

        <PopupSaveFile
          handleSubmit={handlePopupSaveFileSubmit}
          isOpen={popupSaveFileIsOpen}
          onClose={closeAllPopups}
          onNoButtonClick={handlePopupSaveFileSubmitNoButtonClick}
        />

        <FolderContextMenu
          isOpen={folderContextMenuIsOpen}
          anchorPoint={anchorPoint}
          handleRenameButtonClick={handleRenameButtonClick}
          handleDeleteFolderButtonClick={handleDeleteFolderButtonClick}
          handleCreateFolderButtonClick={handleCreateFolderButtonClick}
          handleCreateFileButtonClick={handleCreateFileButtonClick}
        />

        <FileContextMenu
          isOpen={fileContextMenuIsOpen}
          anchorPoint={anchorPoint}
          handleRenameButtonClick={handleRenameButtonClick}
          handleDeleteFileButtonClick={handleDeleteFileButtonClick}
          closeAllContextMenus={closeAllContextMenus}
        />
      </selectedIdContext.Provider>
    </div>
  );
}

export default App;
