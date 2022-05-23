import { ExplorerDataType } from "./index";

type FolderComponentType = {
  title: string;
  id: number;
  handleFolderComponentClick: (id: number) => void;
  handleFileDoubleClick: () => void;
  children?: Array<ExplorerDataType>;
  selectedId: number;
  handleFolderRightClick: (e: MouseEvent) => void;
  handleFileRightClick: (e: MouseEvent) => void;
};

export default FolderComponentType;
