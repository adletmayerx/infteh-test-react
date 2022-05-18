import React from "react";
import styles from "./Header.module.css";
import { ToolBar } from "../index";

const Header = () => {
  return (
    <header className={styles.header}>
      <ToolBar />
    </header>
  );
};

export default Header;
