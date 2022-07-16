/**
  224. 基本计算器
  给你一个字符串表达式 s ，请你实现一个基本计算器来计算并返回它的值。

  注意:不允许使用任何将字符串作为数学表达式计算的内置函数，比如 eval() 。

  示例 1：

  输入：s = "1 + 1"
  输出：2
  示例 2：

  输入：s = " 2-1 + 2 "
  输出：3
  示例 3：

  输入：s = "(1+(4+5+2)-3)+(6+8)"
  输出：23
 */

/**
 * 核心就是括号展开
 * 通过一个sign来标记当前是加还是减
 */
var calculate = function (s) {
  const mathStr = ["+", "-", "(", ")", " "];
  let stack = [1];
  let sign = 1;
  let res = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") continue;
    if (s[i] === "+") {
      sign = stack[stack.length - 1];
    } else if (s[i] === "-") {
      sign = -stack[stack.length - 1];
    } else if (s[i] === "(") {
      stack.push(sign);
    } else if (s[i] === ")") {
      stack.pop();
    } else {
      let num = "";
      while (i < s.length) {
        if (mathStr.includes(s[i])) {
          i--;
          break;
        }
        num += s[i];
        i++;
      }
      res += sign * Number(num);
    }
  }
  return res;
};

const res = calculate("11 + 13 - (10 - 20)");
console.log("res: ", res);
