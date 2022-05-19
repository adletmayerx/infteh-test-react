type ExplorerDataType = {
  title: string;
  id: number;
  extension?: string;
  type: "file" | "folder";
  childrenIds?: Array<number>;
  parentId?: number;
  children?: Array<ExplorerDataType>;
  value?: string;
};

export default ExplorerDataType;
