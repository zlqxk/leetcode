/**
  在一个由 '0' 和 '1' 组成的二维矩阵内，找到只包含 '1' 的最大正方形，并返回其面积。

  示例 1：


  输入：matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
  输出：4
  示例 2：


  输入：matrix = [["0","1"],["1","0"]]
  输出：1
  示例 3：

  输入：matrix = [["0"]]
  输出：0

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/maximal-square
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
  const dp = [];
  let ans = 0;
  for (let i = 0; i < matrix.length; i++) {
    dp.push([]);
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === "1") {
        const left = j - 1;
        const top = i - 1;
        if (left >= 0 && top >= 0) {
          const min = Math.min(dp[i][left], dp[top][j], dp[top][left]);
          dp[i][j] = min + 1;
        } else {
          dp[i][j] = 1;
        }
      } else {
        dp[i][j] = 0;
      }
      ans = Math.max(ans, dp[i][j]);
    }
  }

  return ans * ans;
};

const res = maximalSquare([
  ["1", "0", "1", "0", "0"],
  ["1", "0", "1", "1", "1"],
  ["1", "1", "1", "1", "1"],
  ["1", "0", "0", "1", "0"],
]);

console.log(res, "res");
