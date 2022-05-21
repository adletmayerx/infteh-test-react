import { ExplorerDataType } from ".";

type EditorType = {
  activeFile: ExplorerDataType;
  setActiveFile: (value: any) => void;
};

export default EditorType;
