/**
  5. 最长回文子串
  给你一个字符串 s，找到 s 中最长的回文子串。

  示例 1：

  输入：s = "babad"
  输出："bab"
  解释："aba" 同样是符合题意的答案。
  示例 2：

  输入：s = "cbbd"
  输出："bb"
 */

/**
 * dp[i][j] 表示 s(i...j) 是否是回文子串
 * 边界
 * dp[i][i] = 1
 * 转移方程
 * if s[i] === s[j]
 * dp[i][j] = dp[i - 1][j - 1] ? true : false
 * else 
 * dp[i][j] = false
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let maxLen = 1;
  let maxStart = 0;
  if (s.length === 1) return s;
  const dpList = new Array(s.length)
    .fill(false)
    .map(() => new Array(s.length).fill(false));

  for (let i = 0; i < s.length; i++) {
    dpList[i][i] = true;
  }

  for (let i = 2; i <= s.length; i++) {
    for (let j = 0; j < s.length; j++) {
      const start = j;
      const end = j + i - 1;
      if (end > s.length - 1) break;
      if (s[start] !== s[end]) {
        dpList[start][end] = false;
      } else {
        if (i === 2 || dpList[start + 1][end - 1]) {
          dpList[start][end] = true;
          maxLen = Math.max(maxLen, i);
          maxStart = start;
        } else {
          dpList[start][end] = false;
        }
      }
    }
  }

  return s.substring(maxStart, maxStart + maxLen);
};

const res = longestPalindrome("babad");
console.log("res: ", res);
