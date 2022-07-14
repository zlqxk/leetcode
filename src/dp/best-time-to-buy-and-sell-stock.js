/**
  121. 买卖股票的最佳时机
  给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。

  你只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票。设计一个算法来计算你所能获取的最大利润。

  返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 0 。

  示例 1：

  输入：[7,1,5,3,6,4]
  输出：5
  解释：在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
      注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格；同时，你不能在买入前卖出股票。
  
  示例 2：

  输入：prices = [7,6,4,3,1]
  输出：0
  解释：在这种情况下, 没有交易完成, 所以最大利润为 0。

 */

/**
 * @param {number[]} prices
 * @return {number}
 * 如果你知道每一天卖出能获得的最大收益，最后去所有天数的收益里面最大值。
 * 记录最小的价格，用当天的价格减去最小的价格，这就是当前的最大收益
 * 需要两个标记
 * 1、当天最大收益 = 当天价格 - 这天之前的最小价格
 * 2、这天之前的最小价格
 */
var maxProfit = function (prices) {
  let dpMax = 0;
  let min = prices[0];
  for (let i = 1; i < prices.length; i++) {
    min = Math.min(min, prices[i]);
    dpMax = Math.max(dpMax, prices[i] - min);
  }
  return dpMax;
};

const res = maxProfit([7, 6, 4, 3, 1]);
console.log("res: ", res);