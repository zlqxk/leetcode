// function first(root, list = []) {
//   if (root) {
//     list.push(root.value);
//     first(root.left, list);
//     first(root.right, list);
//   }
//   return list;
// }

function first(root) {
  const stack = [];
  const list = [];
  while (stack.length || root) {
    if (root) {
      list.push(root.value);
      stack.push(root);
      root = root.left;
    } else {
      const node = stack.pop();
      root = node.right;
    }
  }

  return list;
}

const list = first(tree);
console.log(list, "list");
