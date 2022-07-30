/**
  123. 买卖股票的最佳时机 III
  给定一个数组，它的第 i 个元素是一支给定的股票在第 i 天的价格。

  设计一个算法来计算你所能获取的最大利润。你最多可以完成 两笔 交易。

  注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。

  示例 1:

  输入：prices = [3,3,5,0,0,3,1,4]
  输出：6
  解释：在第 4 天（股票价格 = 0）的时候买入，在第 6 天（股票价格 = 3）的时候卖出，这笔交易所能获得利润 = 3-0 = 3 。
      随后，在第 7 天（股票价格 = 1）的时候买入，在第 8 天 （股票价格 = 4）的时候卖出，这笔交易所能获得利润 = 4-1 = 3 。
  示例 2：

  输入：prices = [1,2,3,4,5]
  输出：4
  解释：在第 1 天（股票价格 = 1）的时候买入，在第 5 天 （股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5-1 = 4 。   
      注意你不能在第 1 天和第 2 天接连购买股票，之后再将它们卖出。   
      因为这样属于同时参与了多笔交易，你必须在再次购买前出售掉之前的股票。
  示例 3：

  输入：prices = [7,6,4,3,1] 
  输出：0 
  解释：在这个情况下, 没有交易完成, 所以最大利润为 0。
  示例 4：

  输入：prices = [1]
  输出：0
 */

/**
 * dp[0][i][k] 表示第i天不持有股票 且 交易了k次的最大利润
 * dp[1][i][k] 表示第i天持有股票 且 交易了k次的最大利润
 * 买的时候开启一次交易
 * dp[0][i][k] = Math.max(dp[0][i- 1][k], dp[1][i- 1][k] + prices[i])
 * dp[1][i][k] = Math.max(dp[1][i- 1][k], dp[0][i- 1][k - 1] - prices[i])
 * 边界
 * dp[0][0][1] = 0;
 * dp[0][0][2] = 0;
 * dp[1][0][1] = -prices[0];
 * dp[1][0][2] = -prices[0];
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let dp = [[], []].map(() =>
    new Array(prices.length).fill(0).map(() => new Array(3).fill(0))
  );
  for (let i = 0; i < prices.length; i++) {
    for (let k = 1; k <= 2; k++) {
      if (i === 0) {
        dp[1][i][k] = -prices[0];
        continue;
      }
      dp[0][i][k] = Math.max(dp[0][i - 1][k], dp[1][i - 1][k] + prices[i]);
      dp[1][i][k] = Math.max(dp[1][i - 1][k], dp[0][i - 1][k - 1] - prices[i]);
    }
  }
  return dp[0][prices.length - 1][2];
};

var maxProfit2 = function (prices) {
  let dp_0_i_1 = 0;
  let dp_0_i_2 = 0;
  let dp_1_i_1 = -prices[0];
  let dp_1_i_2 = -prices[0];
  for (let i = 0; i < prices.length; i++) {
    for (let k = 1; k <= 2; k++) {
      dp_0_i_1 = Math.max(dp_0_i_1, dp_1_i_1 + prices[i]);
      dp_0_i_2 = Math.max(dp_0_i_2, dp_1_i_2 + prices[i]);

      dp_1_i_1 = Math.max(dp_1_i_1, -prices[i]);
      dp_1_i_2 = Math.max(dp_1_i_2, dp_0_i_1 - prices[i]);
    }
  }
  return dp_0_i_2;
};

const res = maxProfit([1, 2, 3, 4, 5]);
console.log("res: ", res);
