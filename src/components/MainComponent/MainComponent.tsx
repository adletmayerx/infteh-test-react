import React from "react";
import styles from "./MainComponent.module.css";
import { Explorer, FileView } from "../";
import { ExplorerDataType } from "../../types";

type MainComponentType = {
  explorerData: Array<ExplorerDataType>;
};

const MainComponent = ({ explorerData }: MainComponentType) => {
  return (
    <main className={styles.main}>
      <Explorer explorerData={explorerData} />
      <FileView />
    </main>
  );
};

export default MainComponent;
