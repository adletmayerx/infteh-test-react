import { ExplorerDataType } from "./";

type MainComponentType = {
  explorerData: Array<ExplorerDataType>;
  handleFileDoubleClick: () => void;
  activeFile: ExplorerDataType;
  setActiveFile: (value: any) => void;
  openFiles: Array<ExplorerDataType>;
  handleOpenFileClick: (id: number) => void;
  handleOpenFileCloseButtonClick: (id: number) => void;
  handleFolderRightClick: (e: MouseEvent) => void;
  handleFileRightClick: (e: MouseEvent) => void;
};

export default MainComponentType;
