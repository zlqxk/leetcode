/**
  739. 每日温度
  给定一个整数数组 temperatures ，表示每天的温度，返回一个数组 answer ，其中 answer[i] 是指对于第 i 天，下一个更高温度出现在几天后。如果气温在这之后都不会升高，请在该位置用 0 来代替。

  示例 1:

  输入: temperatures = [73,74,75,71,69,72,76,73]
  输出: [1,1,4,2,1,1,0,0]
  示例 2:

  输入: temperatures = [30,40,50,60]
  输出: [1,1,1,0]
  示例 3:

  输入: temperatures = [30,60,90]
  输出: [1,1,0]
 */

/**
 * 单调栈
 * 因为有明显的顺序关系，升高
 * 维护一个栈，遍历数组入栈，入栈的时候需要记录信息（当前的值和坐标）
 * 如果将要入栈的元素比栈顶元素大，则依次出栈，直到栈内元素大于当前元素，或者栈空
 *
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  const result = [];
  const stack = [];
  for (let i = 0; i < temperatures.length; i++) {
    const temperature = temperatures[i];
    const top = stack[stack.length - 1];

    if (stack.length !== 0 && temperature > top.val) {
      for (let j = stack.length - 1; j >= 0; j--) {
        if (stack[j].val < temperature) {
          const { index } = stack.pop();
          result[index] = i - index;
        } else {
          break;
        }
      }
    }

    stack.push({
      val: temperature,
      index: i,
    });
  }
  console.log('stack: ', stack);
  stack.forEach((item) => result[item.index] = 0);
  console.log('result: ', result);
  return result;
};

dailyTemperatures([55, 38, 53, 81, 61, 93, 97, 32, 43, 78]);
