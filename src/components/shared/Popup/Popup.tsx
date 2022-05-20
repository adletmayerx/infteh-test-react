import cn from "classnames/bind";
import styles from "./Popup.module.css";
import { PopupType } from "../../../types";

const Popup = ({
  title,
  children,
  modifier,
  onClose,
  isOpen,
  className,
  onOverlayClick,
}: PopupType) => {
  return (
    <div
      className={cn(
        styles.popup,
        { [styles.popup_is_open]: isOpen },
        className
      )}
    >
      <div className={styles.popup__overlay} onClick={onOverlayClick}></div>
      <div className={styles.popup__content}>
        <button
          className={styles.popup__home}
          onClick={onClose}
          type="button"
        />
        <button
          className={styles.popup__close}
          type="button"
          onClick={onClose}
        />
        <h3 className={styles.popup__title}>{title}</h3>
        {children}
      </div>
    </div>
  );
};

export default Popup;
