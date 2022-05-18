import { ExplorerDataType } from "./index";

type FolderComponentType = {
  title: string;
  id: number;
  handleFolderComponentClick: (id: number) => void;
  children?: Array<ExplorerDataType>;
};

export default FolderComponentType;
