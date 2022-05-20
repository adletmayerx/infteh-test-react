import { javascript } from "@codemirror/lang-javascript";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";

const editorLanguages = {
  js: javascript(),
  html: html(),
  css: css(),
};

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
];

export { editorLanguages, explorerDataUnsorted };
