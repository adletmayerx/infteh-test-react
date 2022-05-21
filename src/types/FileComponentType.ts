type FileComponentType = {
  title: string;
  extension: string | undefined;
  id: number;
  handleFileComponentClick: (id: number) => void;
  selectedId: number;
  handleFileDoubleClick: () => void;
};

export default FileComponentType;
