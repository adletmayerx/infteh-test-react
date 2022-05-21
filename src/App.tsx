import React, { useState, useEffect } from "react";
import styles from "./App.module.css";
import {
  Header,
  MainComponent,
  PopupRename,
  PopupCreateFolder,
} from "./components";
import { ExplorerDataType } from "./types";
import selectedIdContext from "./contexts/selected-id-context";
import Folder from "./utils/FolderClass";

function App() {
  let explorerDataUnsorted = [
    {
      title: "Folder0",
      id: 100,
      type: "folder",
      childrenIds: [101],
    },
    {
      title: "File1",
      extension: "css",
      id: 1,
      type: "file",
      value: "css strings",
    },
    {
      title: "File2",
      extension: "js",
      id: 2,
      type: "file",
      value: "js strings",
      parentId: 102,
    },
    {
      title: "File3",
      extension: "html",
      id: 3,
      type: "file",
      value: "html strings",
      parentId: 102,
    },
    {
      title: "Folder1",
      id: 101,
      type: "folder",
      parentId: 100,
      childrenIds: [102],
    },
    {
      title: "Folder2",
      id: 102,
      type: "folder",
      parentId: 101,
      childrenIds: [2, 3],
    },
  ] as Array<ExplorerDataType>;

  const [array, setArray] = useState(explorerDataUnsorted);

  const [selectedId, setSelectedId] = useState(null);
  const [selectedExplorerDataItem, setSelectedExplorerDataItem] = useState(
    null
  ) as any;
  const [popupRenameIsOpen, setPopupRenameIsOpen] = useState(false);
  const [popupCreateFolderIsOpen, setPopupCreateFolderIsOpen] = useState(false);

  const [openFiles, setOpenFiles] = useState([]) as any;
  const [activeFile, setActiveFile] = useState() as any;

  const handleFileDoubleClick = () => {
    setOpenFiles([...openFiles, selectedExplorerDataItem]);
  };

  useEffect(() => {
    setActiveFile(openFiles[openFiles.length - 1]);
  }, [openFiles]);

  useEffect(() => {
    console.log(activeFile);
  }, [activeFile]);

  const closeAllPopups = () => {
    setPopupRenameIsOpen(false);
    setPopupCreateFolderIsOpen(false);
  };

  useEffect(() => {
    if (!selectedId) {
      return;
    }
    setSelectedExplorerDataItem(array.find((item) => item.id === selectedId));
  }, [array, selectedId]);

  const handleRenameButtonClick = () => {
    if (!selectedExplorerDataItem) {
      return;
    }
    setPopupRenameIsOpen(true);
  };

  const handleCreateFolderButtonClick = () => {
    setPopupCreateFolderIsOpen(true);
  };

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

  const handleRenamePopupFormSubmit = (newName: string) => {
    if (selectedExplorerDataItem.type === "file") {
      if (!newName.includes(".")) {
        alert("введите расширение файла");
        return;
      }
      const [name, extension] = newName.split(".");
      setArray(
        array.map((item) =>
          item.id === selectedId
            ? { ...item, title: name, extension: extension }
            : item
        )
      );
    } else {
      setArray(
        array.map((item) => {
          if (item.id === selectedId) {
            return { ...item, title: newName };
          } else {
            return item;
          }
        })
      );
    }
    closeAllPopups();
  };

  const handlPopupCreateFolderSubmit = (title: string) => {
    if (!selectedId) {
      const newFolder = new Folder(title);
      setArray([...array, newFolder]);
    } else {
      const newFolder = new Folder(title, selectedId);
      setArray([...array, newFolder]);
    }
    closeAllPopups();
  };

  return (
    <div className={styles.app}>
      <selectedIdContext.Provider value={{ selectedId, setSelectedId }}>
        <Header
          handleRenameButtonClick={handleRenameButtonClick}
          handleDeleteFolderButtonClick={handleDeleteFolderButtonClick}
          handleDeleteFileButtonClick={handleDeleteFileButtonClick}
          handleCreateFolderButtonClick={handleCreateFolderButtonClick}
        />

        <MainComponent
          explorerData={array}
          handleFileDoubleClick={handleFileDoubleClick}
          activeFile={activeFile}
        />

        {selectedExplorerDataItem && (
          <PopupRename
            handleSubmit={handleRenamePopupFormSubmit}
            isOpen={popupRenameIsOpen}
            onClose={closeAllPopups}
            onOverlayClick={closeAllPopups}
            selectedExplorerDataItem={selectedExplorerDataItem}
          />
        )}

        <PopupCreateFolder
          handleSubmit={handlPopupCreateFolderSubmit}
          isOpen={popupCreateFolderIsOpen}
          onClose={closeAllPopups}
          onOverlayClick={closeAllPopups}
        />
      </selectedIdContext.Provider>
    </div>
  );
}

export default App;
