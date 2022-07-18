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
 * 有效的括号组合说明组合的顺序必须是右括号数量小于左括号的时候才能放右括号
 * 还剩余左括号的时候就可以放左括号
 * 优先放左括号，并且计数，如果超过这个数字了就开始放右括号
 * 放右括号的时候也计数，如果数量大于左括号则不能继续放了
 * 递归退出的条件是字符串长度等于 2 * 左括号数量
 * 每次递归完要回溯，将上一次放的括号移出来，才能开始下一个组合
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
