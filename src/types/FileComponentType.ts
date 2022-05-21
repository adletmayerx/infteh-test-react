type FileComponentType = {
  title: string;
  extension: string | undefined;
  id: number;
  handleFileComponentClick: (id: number) => void;
  selectedId: number;
  handleFileDoubleClick: () => void;
  handleFileRightClick: (e: MouseEvent) => void;
};

export default FileComponentType;
