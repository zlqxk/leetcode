/**
  给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。

  岛屿总是被水包围，并且每座岛屿只能由水平方向和/或竖直方向上相邻的陆地连接形成。

  此外，你可以假设该网格的四条边均被水包围。

  示例 1：

  输入：grid = [
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
  ]
  // [0,0], [0,1], [0,2], [0,3], [1,0], [1,1], [1,3], [2,0], [2,1]
  输出：1
  示例 2：

  输入：grid = [
    ["1","1","1","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
  ]
  // [0,0], [0,1], [0,2], [1,0], [1,1], [2, 2], [3, 3], [3, 4]
  输出：3

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/number-of-islands
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let ans = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === "1") {
        ans += 1;
        dfs(i, j);
      }
    }
  }

  function dfs(i, j) {
    let i_len = grid.length - 1;
    let j_len = grid[0].length - 1;
    if (i < 0 || i > i_len || j_len < 0 || j > j_len || grid[i][j] !== "1")
      return;

    grid[i][j] = "2";
    dfs(i, j + 1);
    dfs(i, j - 1);
    dfs(i + 1, j);
    dfs(i - 1, j);
  }

  return ans;
};

const res = numIslands([
  ["1", "1", "1", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"],
]);

console.log(res, "res");
