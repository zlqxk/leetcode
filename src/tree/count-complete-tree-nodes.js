/**
  222. 完全二叉树的节点个数
  给你一棵 完全二叉树 的根节点 root ，求出该树的节点个数。

  完全二叉树 的定义如下：在完全二叉树中，除了最底层节点可能没填满外，其余每层节点数都达到最大值，并且最下面一层的节点都集中在该层最左边的若干位置。若最底层为第 h 层，则该层包含 1~ 2h 个节点。

  示例 1：


  输入：root = [1,2,3,4,5,6]
  输出：6
  示例 2：

  输入：root = []
  输出：0
  示例 3：

  输入：root = [1]
  输出：1
 */

/**
 * 如果是满平衡二叉树，则节点个数为2^k - 1
 * 但是本题目的平衡二叉树可能不满
 * 但是如果不满的话一定是多一个左叶子节点
 * 所以把这棵树对半分，如果左边是满的，就继续递归右边的
 * 反之
 * 判断哪边是满的就是拿到当前子树的深度
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function (root) {
  if (!root) return 0;
  const leftLevel = getLevel(root.left);
  const rightLevel = getLevel(root.right);
  if (leftLevel === rightLevel) {
    // 左边是满二叉树
    return countNodes(root.right) + (1 << leftLevel);
  } else {
    // 右边是满二叉树
    return countNodes(root.left) + (1 << rightLevel);
  }
};

function getLevel(tree) {
  if (!tree) return 0;
  return getLevel(tree.left) + 1;
}

const res = countNodes({
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
    },
    right: {
      val: 5,
    },
  },
  right: {
    val: 3,
    left: {
      val: 6,
    },
  },
});
console.log(res);
