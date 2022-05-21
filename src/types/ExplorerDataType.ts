type ExplorerDataType = {
  title: string;
  extension?: string;
  id: number;
  type: "file" | "folder";
  value?: string;
  parentId?: number;
  childrenIds?: Array<number>;
  children?: Array<ExplorerDataType>;
};

export default ExplorerDataType;
