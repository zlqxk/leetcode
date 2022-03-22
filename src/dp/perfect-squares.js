/**
  给你一个整数 n ，返回 和为 n 的完全平方数的最少数量 。

  完全平方数 是一个整数，其值等于另一个整数的平方；换句话说，其值等于一个整数自乘的积。例如，1、4、9 和 16 都是完全平方数，而 3 和 11 不是。

  示例 1：

  输入：n = 12
  输出：3 
  解释：12 = 4 + 4 + 4
  示例 2：

  输入：n = 13
  输出：2
  解释：13 = 4 + 9

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/perfect-squares
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  const arr = new Array(n + 1).fill(0);
  for (let i = 0; i <= n; i++) {
    arr[i] = i;
    for (let j = 1; j * j <= i; j++) {
      arr[i] = Math.min(arr[i], arr[i - j * j] + 1);
    }
  }
  return arr[n];
};

const res = numSquares(12);
console.log("res: ", res);
