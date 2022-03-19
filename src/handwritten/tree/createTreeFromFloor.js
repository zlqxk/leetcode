function createTree(list, index = 0) {
  if (list[index]) {
    const root = { value: list[index] };
    root.left = this.createTree(list, 2 * index + 1);
    root.right = this.createTree(list, 2 * index + 2);
    return root;
  }
}

const tree = createTree([1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log("tree: ", tree);
