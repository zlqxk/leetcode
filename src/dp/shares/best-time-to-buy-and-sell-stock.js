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
 * 每一天都有两个状态，一个是持有股票，一个是不持有股票
 * dp[0][i] 在第i天之前卖出股票所能获得的最大利润
 * dp[1][i] 在第i天之前买入股票所能获得的最大利润
 * 今天不持有
 * dp[0][i] = Math.max(dp[0][i - 1], dp[1][i - 1] + prices[i]);
 * 今天持有
 * dp[1][i] = Math.max(dp[1][i - 1], -prices[i]);
 * 边界
 * dp[0][0] = 0;
 * dp[1][0] = -prices[0];
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let dp = [[], []];
  dp[0][0] = 0;
  dp[1][0] = -prices[0];
  for (let i = 0; i < prices.length; i++) {
    dp[0][i] = Math.max(dp[0][i - 1], dp[1][i - 1] + prices[i]);
    dp[1][i] = Math.max(dp[1][i - 1], -prices[i]);
  }
  return dp[0][prices.length - 1];
};

var maxProfit2 = function (prices) {
  let dp_0_i = 0;
  let dp_1_i = -prices[0];
  for (let i = 0; i < prices.length; i++) {
    dp_0_i = Math.max(dp_0_i, dp_1_i + prices[i]);
    dp_1_i = Math.max(dp_1_i, -prices[i]);
  }
  return dp_0_i;
};

const res = maxProfit([7, 1, 5, 3, 6, 4]);
console.log("res: ", res);
