import { ExplorerDataType } from "../types";

type PopupRenameType = {
  onClose: () => void;
  onOverlayClick: () => void;
  isOpen: boolean;
  handleSubmit: (name: string) => void;
  selectedExplorerDataItem: ExplorerDataType;
};

export default PopupRenameType;
