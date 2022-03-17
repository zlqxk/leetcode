// function after(root, list = []) {
//   if (root) {
//     after(root.left, list);
//     after(root.right, list);
//     list.push(root.value);
//   }
//   return list;
// }

function after(root) {
  const stack = [];
  const list = [];
  while (stack.length || root) {
    if (root) {
      stack.push({ cur: root, num: 0 });
      root = root.left;
    } else {
      const node = stack[stack.length - 1];
      if (node.num === 0) {
        node.num += 1;
        root = node.cur.right;
      } else {
        const node = stack.pop();
        list.push(node.cur.value);
      }
    }
  }
  return list;
}

const list = after(tree);
console.log(list, "list");
