/**
  103. 二叉树的锯齿形层序遍历
  给你二叉树的根节点 root ，返回其节点值的 锯齿形层序遍历 。（即先从左往右，再从右往左进行下一层遍历，以此类推，层与层之间交替进行）。

  示例 1：


  输入：root = [3,9,20,null,null,15,7]
  输出：[[3],[20,9],[15,7]]
  示例 2：

  输入：root = [1]
  输出：[[1]]
  示例 3：

  输入：root = []
  输出：[]
 */

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  if (!root) return [];
  let queue = [root];
  let res = [];
  let left2right = true;
  while (queue.length) {
    const combine = [];
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const node = queue.shift();
      if (left2right) {
        combine.push(node.val);
      } else {
        combine.unshift(node.val);
      }
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    res.push(combine);
    left2right = !left2right;
  }
  return res;
};

const tree = {
  val: 1,
  left: {
    val: 2,
    left: { val: 4 },
    right: { val: 5 },
  },
  right: {
    val: 3,
    left: {
      val: 6,
    },
    right: {
      val: 7,
    },
  },
};

const res = zigzagLevelOrder(null);
