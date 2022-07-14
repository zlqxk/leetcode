/**
  94. 二叉树的中序遍历
  给定一个二叉树的根节点 root ，返回 它的 中序 遍历 。

  示例 1：


  输入：root = [1,null,2,3]
  输出：[1,3,2]
  示例 2：

  输入：root = []
  输出：[]
  示例 3：

  输入：root = [1]
  输出：[1]
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number[]}
 * 非递归的话就是自己模拟一个栈，通过这个栈来模拟递归
 */
var inorderTraversal = function (root) {
  let stack = [];
  let result = [];
  while (stack.length > 0 || root) {
    if (!root) {
      const popNode = stack.pop();
      if (!popNode) continue;
      result.push(popNode.val);
      root = popNode.right;
    } else {
      stack.push(root);
      root = root.left;
    }
  }
  return result;
};

const root = new TreeNode(1);
const sec = new TreeNode(2);
const third = new TreeNode(3);
const four = new TreeNode(4);
const fif = new TreeNode(5);

root.left = fif;
root.right = sec;
sec.left = third;
sec.right = four;

const res = inorderTraversal(root);
console.log("res: ", res);
