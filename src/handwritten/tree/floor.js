function floor(root) {
  const queue = [{ cur: root, level: 0 }];
  const list = [];

  while (queue.length) {
    const node = queue.shift();
    console.log('node: ', node);
    if (node.cur) {
      if (list[node.level]) {
        list[node.level].push(node.cur.value);
      } else {
        list[node.level] = [node.cur.value];
      }
      queue.push({ cur: node.cur.left, level: node.level + 1 });
      queue.push({ cur: node.cur.right, level: node.level + 1 });
    }
  }
  return list;
}

const list = floor({ value: 0, left: { value: 1 }, right: { value: 2 } });
console.log(list, "list");
