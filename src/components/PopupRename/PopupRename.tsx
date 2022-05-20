import React, { useState, useEffect, useCallback } from "react";
import Popup from "../shared/Popup/Popup";
import { PopupRenameType } from "../../types";

const PopupRename = ({
  handleSubmit,
  isOpen,
  onClose,
  onOverlayClick,
  initialInputValue,
}: PopupRenameType) => {
  const [value, setValue] = useState(initialInputValue);

  const handleClose = () => {
    onClose();
    onOverlayClick();
  };

  const handleChange = (e: { target: HTMLInputElement }) => {
    setValue(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit(value);
  };

  return (
    <div>
      <Popup
        isOpen={isOpen}
        title={"Переименовать"}
        onClose={handleClose}
        onOverlayClick={handleClose}
      >
        <form onSubmit={onSubmit}>
          <input type="text" value={value} onChange={handleChange} />
        </form>
      </Popup>
    </div>
  );
};

export default PopupRename;
