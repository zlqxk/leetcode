/**
 * 根据子节点查询父节点
 */

let stack = [];

function findFather(tree, value) {
  tree.forEach((item) => {
    stack.push(item.value);
    if (item.value === value) {
      console.log(stack);
      return;
    }
    if (!item.children) {
      stack.pop();
      return;
    }
    findFather(item.children, value);
    stack.pop();
  });
}

const tree = [
  {
    value: "0",
    children: [
      { value: "0-0" },
      { value: "0-1" },
      {
        value: "0-2",
        children: [
          { value: "0-2-1", children: [{ value: "0-2-1-1" }] },
          { value: "0-2-2" },
        ],
      },
      { value: "0-3" },
    ],
  },
  {
    value: "1",
    children: [
      { value: "1-0" },
      { value: "1-1" },
      {
        value: "1-2",
        children: [
          { value: "1-2-0", children: [{ value: "1-2-1-0" }] },
          { value: "1-2-1" },
        ],
      },
      { value: "1-3" },
    ],
  },
];

findFather(tree, "1-2-1-0");
