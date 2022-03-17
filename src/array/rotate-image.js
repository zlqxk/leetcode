/**
给定一个 n × n 的二维矩阵 matrix 表示一个图像。请你将图像顺时针旋转 90 度。

你必须在 原地 旋转图像，这意味着你需要直接修改输入的二维矩阵。请不要 使用另一个矩阵来旋转图像

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/rotate-image
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。} matrix 
 */

var rotate = function (matrix) {
  const len = matrix[0].length;
  for (let i = 0; i < matrix[0].length; i++) {
    for (let j = i; j < len - i - 1; j++) {
      let cache1 = matrix[i][j];
      matrix[i][j] = matrix[len - j - 1][i];
      let cache2 = matrix[j][len - i - 1];
      matrix[j][len - i - 1] = cache1;
      let cache3 = matrix[len - i - 1][len - j - 1];
      matrix[len - i - 1][len - j - 1] = cache2;
      matrix[len - j - 1][i] = cache3;
    }
  }
  console.log("matrix: ", matrix);
};
