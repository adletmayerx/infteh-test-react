import React from "react";
import Popup from "../shared/Popup/Popup";
import styles from "./PopupSaveFile.module.css";

type PopupSaveFileType = {
  handleSubmit: () => void;
  isOpen: boolean;
  onClose: () => void;
  onNoButtonClick: () => void;
};

const PopupSaveFile = ({
  handleSubmit,
  isOpen,
  onClose,
  onNoButtonClick,
}: PopupSaveFileType) => {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit();
  };

  return (
    <Popup
      title={"Вы хотите сохранить файл?"}
      onClose={onClose}
      isOpen={isOpen}
    >
      <form className={styles["popup-form"]} onSubmit={onSubmit}>
        <button className={styles["popup-form__button"]} type="submit">
          Да
        </button>
        <button
          className={styles["popup-form__button"]}
          type="button"
          onClick={onNoButtonClick}
        >
          Нет
        </button>
      </form>
    </Popup>
  );
};

export default PopupSaveFile;
