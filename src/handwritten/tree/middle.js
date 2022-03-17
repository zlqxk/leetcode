// function middle(root, list = []) {
//   if (root) {
//     middle(root.left, list);
//     list.push(root.value);
//     middle(root.right, list);
//   }
//   return list;
// }

function middle(root) {
  const stack = [];
  const list = [];
  while (stack.length || root) {
    if (root) {
      stack.push(root);
      root = root.left;
    } else {
      const node = stack.pop();
      list.push(node.value);
      root = node.right;
    }
  }
  return list;
}

const list = middle(tree);
console.log(list, "list");
