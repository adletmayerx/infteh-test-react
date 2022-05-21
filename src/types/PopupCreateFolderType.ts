type PopupCreateFolderType = {
  onClose: () => void;
  onOverlayClick: () => void;
  isOpen: boolean;
  handleSubmit: (name: string) => void;
};

export default PopupCreateFolderType;
