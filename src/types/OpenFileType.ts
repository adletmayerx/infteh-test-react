import { ExplorerDataType} from "."

type OpenFileType = {
  title: string;
  id: number;
  extension: string;
  onClick: (id: number) => void;
  onCloseButtonClick: (id: number) => void;
  activeFile: ExplorerDataType;
};

export default OpenFileType;
