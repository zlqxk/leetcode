/**
  给你二叉树的根节点 root ，返回其节点值的 层序遍历 。 （即逐层地，从左到右访问所有节点）。

  示例 1：


  输入：root = [3,9,20,null,null,15,7]
  输出：[[3],[9,20],[15,7]]
  示例 2：

  输入：root = [1]
  输出：[[1]]
  示例 3：

  输入：root = []
  输出：[]

  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/binary-tree-level-order-traversal
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  let queue = [root];
  let result = [];
  while (queue.length) {
    const len = queue.length;
    const combine = [];
    for (let i = 0; i < len; i++) {
      const node = queue.shift();
      combine.push(node.val);
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    result.push(combine);
  }
  return result;
};

const tree = {
  val: 3,
  left: {
    val: 9,
  },
  right: {
    val: 20,
    left: {
      val: 15,
    },
    right: {
      val: 7,
    },
  },
};

const res = levelOrder(tree); // 3,9,20,15,7
console.log("res: ", res);
