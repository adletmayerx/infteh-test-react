import React, { useState, useEffect } from "react";
import Popup from "../shared/Popup/Popup";
import { PopupCreateFileType } from "../../types";
import styles from "./PopupCreateFile.module.css";
import cn from "classnames/bind";

const PopupCreateFile = ({
  handleSubmit,
  isOpen,
  onClose,
}: PopupCreateFileType) => {
  const [value, setValue] = useState("");
  const [placeholderValue, setPlaceHolderValue] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [error, setError] = useState("");

  const handleChange = (e: { target: HTMLInputElement }) => {
    setValue(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit(value);
  };

  useEffect(() => {
    setPlaceHolderValue("название_файла.расширение_файла");
  }, [isOpen]);

  useEffect(() => {
    if (!value.includes(".") || value.split(".")[1] === "") {
      setIsValid(false);
      setError("введите расширение файла");
    } else {
      setIsValid(true);
      setError("");
    }
  }, [value]);

  return (
    <div>
      <Popup isOpen={isOpen} title={"Создать файл"} onClose={onClose}>
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

export default PopupCreateFile;
