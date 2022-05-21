import { ReactNode } from "react";

type PopupType = {
  title: string;
  children: ReactNode;
  isOpen?: boolean;
  modifier?: string;
  onClose: () => void;
  className?: string;
};

export default PopupType;
