import React, { useState, useEffect } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { editorLanguages } from "../../utils/constants";
import { ExplorerDataType, EditorType } from "../../types";

const Editor = ({ activeFile }: EditorType) => {
  const [value, setValue] = useState("");
  const [language, setLanguage] = useState(null) as any;
  const [extension, setExtension] = useState([]) as any;

  useEffect(() => {
    if (!activeFile) {
      return;
    }
    setValue(activeFile.value ? activeFile.value : "");
    setLanguage(
      activeFile.extension ? editorLanguages[activeFile.extension] : undefined
    );
  }, [activeFile]);

  useEffect(() => {
    setExtension(language ? [language] : []);
  }, [language]);

  useEffect(() => {
    console.log(extension);
  }, [extension]);

  return (
    <CodeMirror
      value={value}
      height="100%"
      extensions={extension}
      onChange={(value, viewUpdate) => {
        console.log("value:", value);
      }}
    />
  );
};

export default Editor;
