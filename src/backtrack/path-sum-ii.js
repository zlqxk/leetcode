/**
  113. 路径总和 II
  给你二叉树的根节点 root 和一个整数目标和 targetSum ，找出所有 从根节点到叶子节点 路径总和等于给定目标和的路径。

  叶子节点 是指没有子节点的节点。

  示例 1：

  输入：root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
  输出：[[5,4,11,2],[5,8,4,5]]
 */

/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
  const result = [];
  function backtrack(node, targetSum, combine) {
    if (!node) return;
    targetSum = targetSum - node.val;
    combine.push(node.val);
    if (targetSum === 0 && !node.left && !node.right) {
      result.push(combine.slice());
    }
    backtrack(node.left, targetSum, combine);
    backtrack(node.right, targetSum, combine);
    combine.pop();
  }

  backtrack(root, targetSum, []);
  return result;
};

const res = pathSum(
  {
    val: 5,
    left: {
      val: 4,
      left: {
        val: 11,
        left: {
          val: 7,
        },
        right: {
          val: 2,
        },
      },
    },
    right: {
      val: 8,
      left: {
        val: 13,
      },
      right: {
        val: 4,
        left: {
          val: 5,
        },
        right: {
          val: 1,
        },
      },
    },
  },
  22
);

console.log(res);
