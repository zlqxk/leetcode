/**
  1312. 让字符串成为回文串的最少插入次数
  给你一个字符串 s ，每一次操作你都可以在字符串的任意位置插入任意字符。

  请你返回让 s 成为回文串的 最少操作次数 。

  「回文串」是正读和反读都相同的字符串。

  示例 1：

  输入：s = "zzazz"
  输出：0
  解释：字符串 "zzazz" 已经是回文串了，所以不需要做任何插入操作。
  示例 2：

  输入：s = "mbadm"
  输出：2
  解释：字符串可变为 "mbdadbm" 或者 "mdbabdm" 。
  示例 3：

  输入：s = "leetcode"
  输出：5
  解释：插入 5 个字符后字符串变为 "leetcodocteel" 。
 */

/**
 * 找到最长回子序列，然后基于最长回文子序列补坑
 * @param {string} s
 * @return {number}
 */
var minInsertions = function (s) {
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

  return len - max;
};
