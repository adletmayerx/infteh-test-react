class Folder {
  title: string;
  id: number;
  type: "folder";
  parentId?: number;
  constructor(name: string, parentId?: number) {
    this.title = name;
    this.id = Math.ceil(Math.random() * 1000);
    this.type = "folder";
    this.parentId = parentId;
  }
}

export default Folder;
