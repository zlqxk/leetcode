/**
  编写一个高效的算法来搜索 m x n 矩阵 matrix 中的一个目标值 target 。该矩阵具有以下特性：

  每行的元素从左到右升序排列。
  每列的元素从上到下升序排列。
   

  示例 1：


  输入：matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 5
  输出：true
  示例 2：


  输入：matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 20
  输出：false

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/search-a-2d-matrix-ii
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let i = 0;
  let j = matrix[0].length - 1;
  while (j >= 0 && i <= matrix.length - 1) {
    const root = matrix[i][j];
    if (target > root) {
      i++;
    } else if (target < root) {
      j--;
    } else {
      return true;
    }
  }
  return false;
};

const res = searchMatrix(
  [
    [1, 4, 7, 11, 15],
    [2, 5, 8, 12, 19],
    [3, 6, 9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30],
  ],
  23
);
console.log(res);
