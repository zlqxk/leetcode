/**
  199. 二叉树的右视图
  给定一个二叉树的 根节点 root，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。

  示例 1:

  输入: [1,2,3,null,5,null,4]
  输出: [1,3,4]
  示例 2:

  输入: [1,null,3]
  输出: [1,3]
  示例 3:

  输入: []
  输出: []
 */

/**
 * 层序遍历，返回每一层最右边的节点
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function (root) {
  let queue = [root];
  let ans = [];
  while (queue.length) {
    const len = queue.length;
    let combine = [];
    for (let i = 0; i < len; i++) {
      const node = queue.shift();
      combine.push(node);
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    ans.push(combine);
  }
};
