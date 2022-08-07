/**
  504. 七进制数
  给定一个整数 num，将其转化为 7 进制，并以字符串形式输出。

  示例 1:

  输入: num = 100
  输出: "202"
  示例 2:

  输入: num = -7
  输出: "-10"
 */

/**
 * @param {number} num
 * @return {string}
 10转n进制就是逐位取模
 然后下一次计算的时候从10 / k开始
 */
var convertToBase7 = function (num) {
  if (num === 0) return "0";
  if (num < 0) {
    return (-transform(Math.abs(num))).toString();
  }
  return transform(num);
};

function transform(num) {
  let ans = "";
  while (num > 0) {
    let res = num % 7;
    ans = res + ans;
    num = Math.floor(num / 7);
  }
  return ans;
}
