import { javascript } from "@codemirror/lang-javascript";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";
import { ExplorerDataType } from "../types";

const editorLanguages = {
  js: javascript(),
  html: html(),
  css: css(),
} as any;

const explorerDataUnsorted: Array<ExplorerDataType> = [
  {
    title: "Folder0",
    id: 100,
    type: "folder",
    childrenIds: [101, 3],
  },
  {
    title: "File1",
    extension: "css",
    id: 1,
    type: "file",
    value: `.app {
      font-family: "Inter", "Arial", sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 21px;
      line-height: 25px;
      color: #262626;
      background: #f7f7f7;
      min-width: 768px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: stretch;
      margin: 0;
      min-height: 100vh;
    }
    `,
  },
  {
    title: "File2",
    extension: "js",
    id: 2,
    type: "file",
    value: `const listToTree = (array) => {
      let roots = [];
      let children = {};
    
      for (let item of array) {
        if (!item.parentId) {
          roots.push(item);
        } else {
          if (children[item.parentId]) {
            children[item.parentId].push(item);
          } else {
            children[item.parentId] = [item];
          }
        }
      }
    
      const findChildren = (parent) => {
        if (parent.type === "file") {
          return;
        }
        if (children[parent.id]) {
          parent.children = children[parent.id];
          for (let child of parent?.children) {
            findChildren(child);
          }
        }
      };
    
      for (let root of roots) {
        findChildren(root);
      }
      return roots;
    };
    
    export default listToTree;
    `,
    parentId: 101,
  },
  {
    title: "File3",
    extension: "html",
    id: 3,
    type: "file",
    value: `<form className={styles["popup-form"]} onSubmit={onSubmit}>
    <button className={styles["popup-form__button"]} type="submit">
      Да
    </button>
    <button
      className={styles["popup-form__button"]}
      type="button"
      onClick={onNoButtonClick}
    >
      Нет
    </button>
  </form>`,
    parentId: 100,
  },
  {
    title: "Folder1",
    id: 101,
    type: "folder",
    parentId: 100,
    childrenIds: [102, 2],
  },
  {
    title: "Folder2",
    id: 102,
    type: "folder",
    parentId: 101,
    childrenIds: [],
  },
];

export { editorLanguages, explorerDataUnsorted };
