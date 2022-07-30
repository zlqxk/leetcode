/**
  309. 最佳买卖股票时机含冷冻期
  给定一个整数数组prices，其中第  prices[i] 表示第 i 天的股票价格 。​

  设计一个算法计算出最大利润。在满足以下约束条件下，你可以尽可能地完成更多的交易（多次买卖一支股票）:

  卖出股票后，你无法在第二天买入股票 (即冷冻期为 1 天)。
  注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。

  

  示例 1:

  输入: prices = [1,2,3,0,2]
  输出: 3 
  解释: 对应的交易状态为: [买入, 卖出, 冷冻期, 买入, 卖出]
  示例 2:

  输入: prices = [1]
  输出: 0
 */

/**
 * dp[0][i] 表示第i天不持股的最大收益
 * dp[1][i] 表示第i天持股的最大收益
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let dp = [[], []];
  dp[0][0] = 0;
  dp[1][0] = -prices[0];
  for (let i = 1; i < prices.length; i++) {
    dp[0][i] = Math.max(dp[0][i - 1], dp[1][i - 1] + prices[i]);
    if (i === 1) {
      dp[1][i] = Math.max(dp[1][i - 1], -prices[i]);
    } else {
      dp[1][i] = Math.max(dp[1][i - 1], dp[0][i - 2] - prices[i]);
    }
  }
  return dp[0][prices.length - 1];
};

var maxProfit2 = function (prices) {
  let dp_0_i = 0;
  let dp_1_i = -prices[0];
  let dp_0_i_1 = 0;
  for (let i = 1; i < prices.length; i++) {
    let tem = dp_0_i;
    dp_0_i = Math.max(dp_0_i, dp_1_i + prices[i]);
    dp_1_i = Math.max(dp_1_i, dp_0_i_1 - prices[i]);
    dp_0_i_1 = tem;
  }
  return dp_0_i;
};
