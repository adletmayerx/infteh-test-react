type FileComponentType = {
  title: string;
  extension: string | undefined;
  id: number;
  handleFileComponentClick: (id: number) => void;
};

export default FileComponentType;
