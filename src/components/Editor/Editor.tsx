import CodeMirror from "@uiw/react-codemirror";
import { StreamLanguage } from "@codemirror/language";
import { javascript } from "@codemirror/lang-javascript";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";
import { editorLanguages } from "../../utils/constants";

const value = `
  const a = 111;
  const b = 2222;
  `;

const Editor = () => {
  return (
    <CodeMirror
      value={value}
      height="100%"
      extensions={[javascript({ jsx: true })]}
      onChange={(value, viewUpdate) => {
        console.log("value:", value);
      }}
    />
  );
};

export default Editor;
