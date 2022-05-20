import React, { useState, useEffect, useContext } from "react";
import styles from "./App.module.css";
import { Header, MainComponent, PopupRename } from "./components";
import { UnsortedDataType } from "./types";
import selectedIdContext from "./contexts/selected-id-context";

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
  ] as Array<UnsortedDataType>;

  const [array, setArray] = useState(explorerDataUnsorted);

  const [selectedId, setSelectedId] = useState(null);
  const [selectedExplorerDataItem, setSelectedExplorerDataItem] = useState(
    null
  ) as any;
  const [popupRenameIsOpen, setPopupRenameIsOpen] = useState(false);

  const closeAllPopups = () => {
    setPopupRenameIsOpen(false);
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

  return (
    <div className={styles.app}>
      <selectedIdContext.Provider value={{ selectedId, setSelectedId }}>
        <Header
          handleRenameButtonClick={handleRenameButtonClick}
          handleDeleteFolderButtonClick={handleDeleteFolderButtonClick}
          handleDeleteFileButtonClick={handleDeleteFileButtonClick}
        />
        <MainComponent explorerData={array} />
        {selectedExplorerDataItem && (
          <PopupRename
            handleSubmit={handleRenamePopupFormSubmit}
            isOpen={popupRenameIsOpen}
            onClose={closeAllPopups}
            onOverlayClick={closeAllPopups}
            initialInputValue={`${selectedExplorerDataItem.title}${
              selectedExplorerDataItem.extension
                ? `.${selectedExplorerDataItem.extension}`
                : ""
            }`}
          />
        )}
      </selectedIdContext.Provider>
    </div>
  );
}

export default App;
