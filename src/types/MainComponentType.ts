import { ExplorerDataType } from "./";

type MainComponentType = {
  explorerData: Array<ExplorerDataType>;
  handleFileDoubleClick: () => void;
  activeFile: ExplorerDataType;
};

export default MainComponentType;
