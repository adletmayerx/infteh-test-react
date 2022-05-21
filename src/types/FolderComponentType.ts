import { ExplorerDataType } from "./index";

type FolderComponentType = {
  title: string;
  id: number;
  handleFolderComponentClick: (id: number) => void;
  handleFileDoubleClick: () => void;
  children?: Array<ExplorerDataType>;
  selectedId: number;
};

export default FolderComponentType;
