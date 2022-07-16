/**
  227. 基本计算器 II
  给你一个字符串表达式 s ，请你实现一个基本计算器来计算并返回它的值。

  整数除法仅保留整数部分。

  你可以假设给定的表达式总是有效的。所有中间结果将在 [-231, 231 - 1] 的范围内。

  注意：不允许使用任何将字符串作为数学表达式计算的内置函数，比如 eval() 。

  示例 1：

  输入：s = "3+2*2"
  输出：7
  示例 2：

  输入：s = " 3/2 "
  输出：1
  示例 3：

  输入：s = " 3+5 / 2 "
  输出：5
 */

/**
 * @param {string} s
 * @return {number}
 * 先遍历一遍把乘除运算完
 * 然后再遍历一遍结果
 * 遍历的时候遇到数字就一直累加，直到遇到第一个+、-符号，就将这个数字push到栈中
 * 记录+、-
 * 继续寻找下一个数字，找到后将下一个数字与 +、-相乘
 * 如果遇到*、/，将栈顶的元素拿出来，与下一个数字运算，运算完成以后再push到数组
 * 最后遍历数组执行+=
 */
var calculate = function (s) {
  const mathStr = ["+", "-", "*", "/"];
  const stack = [];
  let res = 0;
  let sign = 1;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") continue;
    if (s[i] === "+") {
      sign = 1;
    } else if (s[i] === "-") {
      sign = -1;
    } else if (s[i] === "*") {
      let str = "";
      i++;
      while (i < s.length) {
        if (mathStr.includes(s[i])) {
          i--;
          break;
        }
        str += s[i];
        i++;
      }
      let prev = stack.pop();
      prev *= Number(str);
      stack.push(prev);
    } else if (s[i] === "/") {
      let str = "";
      i++;
      while (i < s.length) {
        if (mathStr.includes(s[i])) {
          i--;
          break;
        }
        str += s[i];
        i++;
      }
      let prev = stack.pop();
      prev =
        sign === -1
          ? Math.ceil(prev / Number(str))
          : Math.floor(prev / Number(str));
      stack.push(prev);
    } else {
      let str = "";
      while (i < s.length) {
        if (mathStr.includes(s[i])) {
          i--;
          break;
        }
        str += s[i];
        i++;
      }
      stack.push(Number(str) * sign);
    }
  }
  stack.forEach((item) => (res += item));
  return res;
};

const res = calculate("14-3/2");
console.log("res: ", res);
