/**
  一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。

  机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish” ）。

  问总共有多少条不同的路径？

  示例 1：
  https://assets.leetcode.com/uploads/2018/10/22/robot_maze.png

  输入：m = 3, n = 7
  输出：28
  示例 2：

  输入：m = 3, n = 2
  输出：3
  解释：
  从左上角开始，总共有 3 条路径可以到达右下角。
  1. 向右 -> 向下 -> 向下
  2. 向下 -> 向下 -> 向右
  3. 向下 -> 向右 -> 向下
  示例 3：

  输入：m = 7, n = 3
  输出：28
  示例 4：

  输入：m = 3, n = 3
  输出：6

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/unique-paths
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

// f(i, j) = f(i - 1, j) + f(i, j - 1)
// f(0, j) = f(0, j - 1)
// f(i, 0) = f(i - 1, 0)

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  let dp = [[1]];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 && j === 0) continue;
      if (i === 0) {
        dp[0][j] = dp[0][j - 1];
      } else if (j === 0) {
        dp.push([dp[i - 1][0]]);
      } else {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
      }
    }
  }
  console.log(dp);
  return dp[m - 1][n - 1];
};

const res = uniquePaths(3, 7);
console.log("res: ", res);
