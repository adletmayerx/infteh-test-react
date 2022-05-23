class File {
  title: string;
  id: number;
  type: "file";
  parentId?: number;
  value: string;
  extension: string;

  constructor(name: string, parentId?: number) {
    this.title = name.split(".")[0];
    this.id = Math.ceil(Math.random() * 1000);
    this.type = "file";
    this.parentId = parentId;
    this.value = "";
    this.extension = name.split(".")[1];
  }
}

export default File;
