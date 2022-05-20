import React, { useContext } from "react";
import styles from "./MainComponent.module.css";
import { Explorer, FileView } from "../";
import selectedIdContext from "../../contexts/selected-id-context";
import { MainComponentType } from "../../types";

const MainComponent = ({ explorerData }: MainComponentType) => {
  const { selectedId, setSelectedId } = useContext(selectedIdContext);

  return (
    <main className={styles.main}>
      <Explorer explorerData={explorerData} setSelectedId={setSelectedId} />
      <FileView />
    </main>
  );
};

export default MainComponent;
