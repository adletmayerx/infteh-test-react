const listToTree = (array) => {
  let roots = [];
  let children = {};

  for (let item of array) {
    if (!item.parentId) {
      roots.push(item);
    } else {
      if (children[item.parentId]) {
        children[item.parentId].push(item);
      } else {
        children[item.parentId] = [item];
      }
    }
  }

  const findChildren = (parent) => {
    if (parent.type === "file") {
      return;
    }
    if (children[parent.id]) {
      parent.children = children[parent.id];
      for (let child of parent?.children) {
        findChildren(child);
      }
    }
  };

  for (let root of roots) {
    findChildren(root);
  }
  return roots;
};

export default listToTree;
