/**
  463. 岛屿的周长
  给定一个 row x col 的二维网格地图 grid ，其中：grid[i][j] = 1 表示陆地， grid[i][j] = 0 表示水域。

  网格中的格子 水平和垂直 方向相连（对角线方向不相连）。整个网格被水完全包围，但其中恰好有一个岛屿（或者说，一个或多个表示陆地的格子相连组成的岛屿）。

  岛屿中没有“湖”（“湖” 指水域在岛屿内部且不和岛屿周围的水相连）。格子是边长为 1 的正方形。网格为长方形，且宽度和高度均不超过 100 。计算这个岛屿的周长。


  示例 1：


  输入：grid = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]
  输出：16
  解释：它的周长是上面图片中的 16 个黄色的边
  示例 2：

  输入：grid = [[1]]
  输出：4
  示例 3：

  输入：grid = [[1,0]]
  输出：4
 */

/**
 * @param {number[][]} grid
 * @return {number}
 * 从第一个是陆地的节点开始遍历，向上下左右遍历，如果遇到岛屿就将其设置为-1，遇到水域则周长+1
 * 递归的终止条件是越界
 */
var islandPerimeter = function (grid) {
  let count = 0;

  function dfs(i, j) {
    if (i > grid.length - 1 || i < 0 || j > grid[0].length - 1 || j < 0) {
      count++;
      return;
    }

    if (grid[i][j] === 1) {
      grid[i][j] = 2;
    } else if (grid[i][j] === 0) {
      count++;
      return;
    } else {
      return;
    }
    dfs(i, j + 1);
    dfs(i, j - 1);
    dfs(i + 1, j);
    dfs(i - 1, j);
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        dfs(i, j);
      }
    }
  }

  return count;
};

const res = islandPerimeter([
  [0, 1, 0, 0],
  [1, 1, 1, 0],
  [0, 1, 0, 0],
  [1, 1, 0, 0],
]);
console.log("res: ", res);
