import React, { useState, useEffect, useContext } from "react";
import styles from "./App.module.css";
import { Header, MainComponent } from "./components";
import { UnsortedDataType } from "./types";
import selectedIdContext from "./contexts/selected-id-context";


function App() {
  const [selectedId, setSelectedId] = useState(null);
  const explorerDataUnsorted = [
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

  return (
    <div className={styles.app}>
      <selectedIdContext.Provider value={{ selectedId, setSelectedId }}>
        <Header />
        <MainComponent explorerData={explorerDataUnsorted} />
      </selectedIdContext.Provider>
    </div>
  );
}

export default App;
