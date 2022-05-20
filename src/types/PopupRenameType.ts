type PopupRenameType = {
  onClose: () => void;
  onOverlayClick: () => void;
  initialInputValue: string;
  isOpen: boolean;
  handleSubmit: (name: string) => void;
};

export default PopupRenameType;
