/**
  337. 打家劫舍 III
  小偷又发现了一个新的可行窃的地区。这个地区只有一个入口，我们称之为 root 。

  除了 root 之外，每栋房子有且只有一个“父“房子与之相连。一番侦察之后，聪明的小偷意识到“这个地方的所有房屋的排列类似于一棵二叉树”。 如果 两个直接相连的房子在同一天晚上被打劫 ，房屋将自动报警。

  给定二叉树的 root 。返回 在不触动警报的情况下 ，小偷能够盗取的最高金额 。

  示例 1:

  输入: root = [3,2,3,null,3,null,1]
  输出: 7 
  解释: 小偷一晚能够盗取的最高金额 3 + 3 + 1 = 7
  示例 2:



  输入: root = [3,4,5,1,3,null,1]
  输出: 9
  解释: 小偷一晚能够盗取的最高金额 4 + 5 = 9
 */

/**
 * 偷父节点就不能偷子节点
 * dp[i] 表示第i个节点所能获得的最大收益
 * dp[i] = Math(父节点，父节点的父节点 + 这层的数值)
 * @param {TreeNode} root
 * @return {number}
 */
var rob = function (root) {
  let selectMap = new Map();
  let notSelectMap = new Map();

  function dfs(node) {
    if (!node) return;
    dfs(node.left);
    dfs(node.right);
    selectMap.set(
      node,
      node.val +
        getValue(notSelectMap, node.left) +
        getValue(notSelectMap, node.right)
    );
    notSelectMap.set(
      node,
      Math.max(
        getValue(selectMap, node.left),
        getValue(notSelectMap, node.left)
      ) +
        Math.max(
          getValue(selectMap, node.right),
          getValue(notSelectMap, node.right)
        )
    );
  }

  dfs(root);
  return Math.max(selectMap.get(root), notSelectMap.get(root));
};

function getValue(_map, key) {
  if (_map.has(key)) return _map.get(key);
  return 0;
}
