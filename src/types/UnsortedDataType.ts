import { ExplorerDataType } from ".";

type UnsortedDataType = {
  title: string;
  extension?: string;
  id: number;
  type: "file" | "folder";
  value?: string;
  parentId?: number;
  childrenIds?: Array<number>;
  children?: Array<UnsortedDataType>;
};

export default UnsortedDataType;
