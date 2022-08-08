// 猴子吃香蕉，每个猴子的食量为[4,2,1,5,8,3,1]。猴子贪心，最多可以吃自己食量的两倍，但是不能超过当前剩余香蕉数量的一半。求最少多少个香蕉可以满足猴子？
// [4,3] -> 8
// [4,3,5] -> 18
// [18,10,5]
// [4,3,5,7] -> 28
/**
 * dp[i]表示第i只猴子时需要的最少香蕉数量
 * dp[i] = Math.max(list[i] * 2, Math.min(2 * dp[i + 1], dp[i + 1] + 2 * list[i]))
 */
// 如果当前香蕉总数大于list[i] * 2
// dp[i] = dp[]
// dp[i] = dp[i + 1] +
function eat(list) {
  let dp = [];
  dp[list.length - 1] = list[list.length - 1];
  for (let i = list.length - 2; i >= 0; i--) {
    dp[i] = Math.max(
      list[i] * 2,
      Math.min(2 * dp[i + 1], dp[i + 1] + 2 * list[i])
    );
  }
  return dp[0];
}
