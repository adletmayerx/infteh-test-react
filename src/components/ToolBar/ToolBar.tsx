import React from "react";
import styles from "./ToolBar.module.css";
import { ToolBarButton } from "../index";

const buttons = [
  {
    id: 1,
    title: "Создать Папку",
    handleButtonClick: () => {
      console.log("click");
    },
  },
  {
    id: 2,
    title: "Удалить Папку",
    handleButtonClick: () => {
      console.log("click");
    },
  },
  {
    id: 3,
    title: "Загрузить файл",
    handleButtonClick: () => {
      console.log("click");
    },
  },
  {
    id: 4,
    title: "Скачать файл",
    handleButtonClick: () => {
      console.log("click");
    },
  },
  {
    id: 5,
    title: "Удалить файл",
    handleButtonClick: () => {
      console.log("click");
    },
  },
  {
    id: 6,
    title: "Переименовать",
    handleButtonClick: () => {
      console.log("click");
    },
  },
];

const ToolBar = () => {
  return (
    <ul className={styles["tool-bar"]}>
      {buttons.map((button) => {
        return (
          <li key={button.id} className={styles["tool-bar__item"]}>
            <ToolBarButton
              title={button.title}
              handleButtonClick={button.handleButtonClick}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ToolBar;
