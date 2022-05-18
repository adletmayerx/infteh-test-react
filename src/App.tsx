import React from "react";
import styles from "./App.module.css";
import { Header, MainComponent } from "./components";
import { ExplorerDataType } from "./types";

function App() {
  const explorerDataUnsorted = [
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
      parentId: 101,
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
      childrenIds: [2, 3],
    },
    {
      title: "Folder2",
      id: 102,
      type: "folder",
      parentId: 101,
      childrenIds: [2, 3],
    },
  ];
  const explorerDataSortedByFolders = [
    {
      title: "File1",
      extension: "css",
      id: 1,
      type: "file",
      value: "css strings",
    },
    { title: "File2", extension: "js", id: 2, type: "file" },
    { title: "File3", extension: "html", id: 3, type: "file" },
    {
      title: "Folder1",
      id: 101,
      type: "folder",
      children: [
        { title: "File7", extension: "css", id: 7, type: "file" },
        { title: "File8", extension: "js", id: 8, type: "file" },
      ],
    },
    { title: "File4", extension: "js", id: 4, type: "file" },
    { title: "File5", extension: "html", id: 5, type: "file" },
    { title: "File6", extension: "css", id: 6, type: "file" },
    {
      title: "Folder2",
      id: 102,
      type: "folder",
      children: [
        { title: "File9", extension: "css", id: 9, type: "file" },
        { title: "File10", extension: "js", id: 10, type: "file" },
        { title: "Folder3", id: 103, type: "folder" },
      ],
    },
  ] as Array<ExplorerDataType>;

  return (
    <div className={styles.app}>
      <Header />
      <MainComponent explorerData={explorerDataSortedByFolders} />
    </div>
  );
}

export default App;
