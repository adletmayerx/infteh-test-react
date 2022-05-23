import { ExplorerDataType } from "../types";

type PopupRenameType = {
  onClose: () => void;
  isOpen: boolean;
  handleSubmit: (name: string) => void;
  selectedExplorerDataItem: ExplorerDataType;
};

export default PopupRenameType;
