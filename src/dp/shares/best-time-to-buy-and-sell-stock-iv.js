/**
  188. 买卖股票的最佳时机 IV
  给定一个整数数组 prices ，它的第 i 个元素 prices[i] 是一支给定的股票在第 i 天的价格。

  设计一个算法来计算你所能获取的最大利润。你最多可以完成 k 笔交易。

  注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。

  示例 1：

  输入：k = 2, prices = [2,4,1]
  输出：2
  解释：在第 1 天 (股票价格 = 2) 的时候买入，在第 2 天 (股票价格 = 4) 的时候卖出，这笔交易所能获得利润 = 4-2 = 2 。
  示例 2：

  输入：k = 2, prices = [3,2,6,5,0,3]
  输出：7
  解释：在第 2 天 (股票价格 = 2) 的时候买入，在第 3 天 (股票价格 = 6) 的时候卖出, 这笔交易所能获得利润 = 6-2 = 4 。
      随后，在第 5 天 (股票价格 = 0) 的时候买入，在第 6 天 (股票价格 = 3) 的时候卖出, 这笔交易所能获得利润 = 3-0 = 3 。
 */

/**
 * dp[0][i][k] 表示第i天不持有股票，并且交易了k次的最大利润
 * dp[1][i][k] 表示第i天持有股票，并且交易了k次的最大利润
 * dp[0][i][k] = Math.max(dp[0][i - 1][k], dp[1][i - 1][k] + prices[i])
 * dp[1][i][k] = Math.max(dp[1][i - 1][k], dp[0][i - 1][k - 1] - prices[i])
 * 边界
 * k是边界
 * dp[0][...][0] = 0
 * dp[1][...][0] = 0
 * i是边界
 * dp[0][0][...] = 0
 * dp[1][0][...] = -prices[0]
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (k, prices) {
  if (prices.length === 0) return 0;
  let _k = k;
  let dp = [[], []].map(() =>
    new Array(prices.length).fill(0).map(() => new Array(_k + 1).fill(0))
  );
  for (let i = 0; i < prices.length; i++) {
    for (let k = 1; k <= _k; k++) {
      if (i === 0) {
        dp[1][i][k] = -prices[0];
        continue;
      }
      dp[0][i][k] = Math.max(dp[0][i - 1][k], dp[1][i - 1][k] + prices[i]);
      dp[1][i][k] = Math.max(dp[1][i - 1][k], dp[0][i - 1][k - 1] - prices[i]);
    }
  }
  return dp[0][prices.length - 1][_k];
};

var maxProfit2 = function (k, prices) {
  if (prices.length === 0) return 0;
  let _k = k;
  let dp = [new Array(k + 1).fill(0), new Array(k + 1).fill(-prices[0])];
  for (let i = 0; i < prices.length; i++) {
    for (let k = 1; k <= _k; k++) {
      dp[0][k] = Math.max(dp[0][k], dp[1][k] + prices[i]);
      dp[1][k] = Math.max(dp[1][k], dp[0][k - 1] - prices[i]);
    }
  }
  return dp[0][_k];
};

const res = maxProfit(2, []);
console.log("res: ", res);
