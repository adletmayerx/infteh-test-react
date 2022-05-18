type ExplorerDataType = {
  title: string;
  id: number;
  extension?: string;
  type: "file" | "folder";
  children?: Array<ExplorerDataType>;
  value?: string;
};

export default ExplorerDataType;
