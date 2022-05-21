import { useState, useEffect } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { editorLanguages } from "../../utils/constants";
import { EditorType, ExplorerDataType } from "../../types";
import styles from "./Editor.module.css";

const Editor = ({ activeFile, setActiveFile }: EditorType) => {
  const [language, setLanguage] = useState(null) as any;
  const [extension, setExtension] = useState([]) as any;

  useEffect(() => {
    if (!activeFile) {
      return;
    }
    setLanguage(
      activeFile.extension ? editorLanguages[activeFile.extension] : undefined
    );
  }, [activeFile]);

  useEffect(() => {
    setExtension(language ? [language] : []);
  }, [language]);

  const handleChange = (value: string) => {
    setActiveFile((activeFile: ExplorerDataType) => ({
      ...activeFile,
      value: value,
    }));
  };

  return (
    <div className={styles.editor}>
      <CodeMirror
        value={activeFile.value ? activeFile.value : ""}
        height="100%"
        extensions={extension}
        onChange={(value) => {
          handleChange(value);
        }}
      />
    </div>
  );
};

export default Editor;
