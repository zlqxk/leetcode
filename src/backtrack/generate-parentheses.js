/**
  22. 括号生成
  数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。

  示例 1：

  输入：n = 3
  输出：["((()))","(()())","(())()","()(())","()()()"]
  示例 2：

  输入：n = 1
  输出：["()"]
 */

/**
 * 回溯
 * （（（）））
 * （（）（））
 * （（））（）
 * （）（（））
 * （）（）（）
 * 尽量放左括号，放一个左括号，才能放右括号
 * 直到括号用完
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  let result = [];

  function backtrack(str, count, rightCount) {
    if (str.length === n * 2) {
      result.push(str);
      return;
    }

    // 有左括号
    if (count < n) {
      str += "(";
      backtrack(str, count + 1, rightCount);
      str = str.substring(0, str.length - 1);
    }

    if (count > rightCount) {
      // 有右括号
      str += ")";
      backtrack(str, count, rightCount + 1);
      str = str.substring(0, str.length - 1);
    }
  }

  let str = "";
  backtrack(str, 0, 0);
  return result;
};

const res = generateParenthesis(3);
console.log("res: ", res);
