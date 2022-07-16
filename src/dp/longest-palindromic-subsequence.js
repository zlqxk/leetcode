/**
  516. 最长回文子序列
  给你一个字符串 s ，找出其中最长的回文子序列，并返回该序列的长度。

  子序列定义为：不改变剩余字符顺序的情况下，删除某些字符或者不删除任何字符形成的一个序列。


  示例 1：

  输入：s = "bbbab"
  输出：4
  解释：一个可能的最长回文子序列为 "bbbb" 。
  示例 2：

  输入：s = "cbbd"
  输出：2
  解释：一个可能的最长回文子序列为 "bb" 。
 */

/**
 * 最值问题，动态规划
 * 定义dp[i][j]的含义是字符串s(i...j)的最长子序列长度
 * 边界值dp[i][i+1]都为1
 * 所以从长度2一直遍历到长度len
 * s[i] === s[j] -> dp[i][j] = dp[i + 1][j - 1] + 2
 * s[i] !== s[j] -> dp[i][j] = Math.max(dp[i + 1][j],dp[i, j - 1])
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function (s) {
  const len = s.length;
  let max = 1;
  let dp = new Array(len).fill(0).map(() => new Array(len).fill(0));
  for (let i = 0; i < len; i++) {
    dp[i][i] = 1;
  }

  for (let i = 2; i <= len; i++) {
    for (let j = 0; j < len; j++) {
      let start = j;
      let end = j + i - 1;
      if (end >= len) continue;
      if (s[start] === s[end]) {
        if (i === 2) {
          dp[start][end] = 2;
        } else {
          dp[start][end] = dp[start + 1][end - 1] + 2;
        }
      } else {
        dp[start][end] = Math.max(dp[start + 1][end], dp[start][end - 1]);
      }
      max = Math.max(max, dp[start][end]);
    }
  }

  return max;
};

const res = longestPalindromeSubseq("bbbab");
console.log("res: ", res);
