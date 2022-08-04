/**
  剑指 Offer II 095. 最长公共子序列
  给定两个字符串 text1 和 text2，返回这两个字符串的最长 公共子序列 的长度。如果不存在 公共子序列 ，返回 0 。

  一个字符串的 子序列 是指这样一个新的字符串：它是由原字符串在不改变字符的相对顺序的情况下删除某些字符（也可以不删除任何字符）后组成的新字符串。

  例如，"ace" 是 "abcde" 的子序列，但 "aec" 不是 "abcde" 的子序列。
  两个字符串的 公共子序列 是这两个字符串所共同拥有的子序列。

  示例 1：

  输入：text1 = "abcde", text2 = "acef" 
  输出：3  
  解释：最长公共子序列是 "ace" ，它的长度为 3 。
  示例 2：

  输入：text1 = "abc", text2 = "abc"
  输出：3
  解释：最长公共子序列是 "abc" ，它的长度为 3 。
  示例 3：

  输入：text1 = "abc", text2 = "def"
  输出：0
  解释：两个字符串没有公共子序列，返回 0 。
 */

/**
 * dp[i][j] 表示 text1(0...i)和text2(0...j)的最长公共子序列长度
 * 边界
 * 无
 * 转移方程
 * if text[i] === text[j]
 * dp[i][j] = dp[i - 1][j - 1] + 1
 * else
 * dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j])
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  const dp = new Array(text1.length + 1)
    .fill(0)
    .map(() => new Array(text2.length + 1).fill(0));

  for (let i = 0; i < text1.length; i++) {
    for (let j = 0; j < text2.length; j++) {
      if (text2[j] === text1[i]) {
        dp[i + 1][j + 1] = dp[i][j] + 1;
      } else {
        dp[i + 1][j + 1] = Math.max(dp[i + 1][j], dp[i][j + 1]);
      }
    }
  }

  return dp[text1.length][text2.length];
};

const res = longestCommonSubsequence("abc", "def");
console.log("res: ", res);
