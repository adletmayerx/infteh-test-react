import styles from "./OpenFile.module.css";
import cn from "classnames/bind";
import { OpenFileType } from "../../types";

const OpenFile = ({
  title,
  id,
  extension,
  activeFile,
  onClick,
  onCloseButtonClick,
}: OpenFileType) => {
  const handleClick = (e: any) => {
    e.stopPropagation();
    if (activeFile.id === id) {
      return;
    }

    onClick(id);
  };

  const handleCloseButtonClick = (e: any) => {
    e.stopPropagation();
    onCloseButtonClick(id);
  };

  return (
    <div className={styles["open-file"]} onClick={handleClick}>
      <h5
        className={cn(styles["open-file__title"], {
          [styles["open-file__title_is_active"]]:
            activeFile && activeFile.id === id,
        })}
      >{`${title}.${extension}`}</h5>
      {activeFile && activeFile.id === id && (
        <button
          type="button"
          className={styles["open-file__close-button"]}
          onClick={handleCloseButtonClick}
        ></button>
      )}
    </div>
  );
};

export default OpenFile;
