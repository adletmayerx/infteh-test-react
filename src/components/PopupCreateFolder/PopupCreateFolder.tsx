import React, { useState, useEffect } from "react";
import Popup from "../shared/Popup/Popup";
import { PopupCreateFolderType } from "../../types";
import styles from "./PopupCreateFolder.module.css";
import cn from "classnames/bind";

const PopupCreateFolder = ({
  handleSubmit,
  isOpen,
  onClose,
  onOverlayClick,
  }: PopupCreateFolderType) => {
  const [value, setValue] = useState("");
  const [placeholderValue, setPlaceHolderValue] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [error, setError] = useState("");

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

  useEffect(() => {
    setPlaceHolderValue("название_папки");
  }, [isOpen]);

  useEffect(() => {
    if (value === "") {
      setIsValid(false);
      setError("введите название");
    } else {
      setIsValid(true);
      setError("");
    }
  }, [value]);

  return (
    <div>
      <Popup
        isOpen={isOpen}
        title={"Создать Папку"}
        onClose={handleClose}
        onOverlayClick={handleClose}
      >
        <form className={styles["popup-form"]} onSubmit={onSubmit}>
          <input
            className={styles["popup-form__input"]}
            type="text"
            value={value}
            onChange={handleChange}
            placeholder={placeholderValue}
            required
          />
          {error && (
            <span className={styles["popup-form__input-error"]}>{error}</span>
          )}
          <button
            type="submit"
            disabled={!isValid}
            className={cn(styles["popup-form__submit-button"], {
              [styles["popup-form__submit-button_inactive"]]: !isValid,
            })}
          >
            подтвердить
          </button>
        </form>
      </Popup>
    </div>
  );
};

export default PopupCreateFolder;
