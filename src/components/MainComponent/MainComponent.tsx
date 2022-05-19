import React, { useState, useEffect, useContext } from "react";
import styles from "./MainComponent.module.css";
import { Explorer, FileView } from "../";
import { UnsortedDataType } from "../../types";
import selectedIdContext from "../../contexts/selected-id-context";

type MainComponentType = {
  explorerData: Array<UnsortedDataType>;
};

const MainComponent = ({ explorerData }: MainComponentType) => {
  const [data, setData] = useState(explorerData);
  const { selectedId, setSelectedId } = useContext(selectedIdContext);
  const [selectedItem, setSelectedItem] = useState({});

  

  return (
    <main className={styles.main}>
      <Explorer explorerData={data} setSelectedId={setSelectedId} />
      <FileView />
    </main>
  );
};

export default MainComponent;
