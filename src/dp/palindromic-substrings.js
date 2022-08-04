/**
  647. 回文子串
  给你一个字符串 s ，请你统计并返回这个字符串中 回文子串 的数目。

  回文字符串 是正着读和倒过来读一样的字符串。

  子字符串 是字符串中的由连续字符组成的一个序列。

  具有不同开始位置或结束位置的子串，即使是由相同的字符组成，也会被视作不同的子串。

  示例 1：

  输入：s = "abc"
  输出：3
  解释：三个回文子串: "a", "b", "c"
  示例 2：

  输入：s = "aaa"
  输出：6
  解释：6个回文子串: "a", "a", "a", "aa", "aa", "aaa"
 */
/**
 * @param {string} s
 * @return {number}
 dp[i][j] 表示 s[i...j]是否是回文子串
 */
var countSubstrings = function (s) {
  let ans = 0;
  const dp = new Array(s.length)
    .fill(false)
    .map(() => new Array(s.length).fill(false));
  for (let i = 0; i < s.length; i++) {
    dp[i][i] = true;
  }
  for (let i = 2; i <= s.length; i++) {
    for (let j = 0; j < s.length; j++) {
      const start = j;
      const end = j + i - 1;
      if (end === s.length) break;
      if (s[start] === s[end]) {
        if (i === 2) {
          dp[start][end] = true;
          ans++;
        } else {
          dp[start][end] = dp[start + 1][end - 1];
          if (dp[start][end]) {
            ans++;
          }
        }
      } else {
        dp[start][end] = false;
      }
    }
  }
  return ans + s.length;
};
