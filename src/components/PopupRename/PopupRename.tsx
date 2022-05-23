import React, { useState, useEffect } from "react";
import Popup from "../shared/Popup/Popup";
import { PopupRenameType } from "../../types";
import styles from "./PopupRename.module.css";
import cn from "classnames/bind";

const PopupRename = ({
  handleSubmit,
  isOpen,
  onClose,
  selectedExplorerDataItem,
}: PopupRenameType) => {
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
    if (!selectedExplorerDataItem) {
      return;
    }
    if (selectedExplorerDataItem.type === "file") {
      setValue(
        `${selectedExplorerDataItem.title}.${selectedExplorerDataItem.extension}`
      );
      setPlaceHolderValue("название_файла.расширение_файла");
    } else {
      setValue(selectedExplorerDataItem.title);
      setPlaceHolderValue("название_папки");
    }
  }, [selectedExplorerDataItem, isOpen]);

  useEffect(() => {
    if (value === "") {
      setIsValid(false);
      setError("введите название");
    } else if (
      (selectedExplorerDataItem.type === "file" && !value.includes(".")) ||
      value.split(".")[1] === ""
    ) {
      setIsValid(false);
      setError("введите расширение файла");
    } else {
      setIsValid(true);
      setError("");
    }
  }, [selectedExplorerDataItem.type, value]);

  return (
    <div>
      <Popup isOpen={isOpen} title={"Переименовать"} onClose={onClose}>
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

export default PopupRename;
