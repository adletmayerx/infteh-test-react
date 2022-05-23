import { createContext } from "react";

const selectedIdContext = createContext({
  selectedId: null,
  setSelectedId: (id) => {},
});

export default selectedIdContext;
