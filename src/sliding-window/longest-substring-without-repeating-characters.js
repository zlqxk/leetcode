/**
  - 不含有重复字符的 最长子串 的长度。

  给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。

  示例 1:

  输入: s = "abcabcbb"
  输出: 3 
  解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
  示例 2:

  输入: s = "bbbbb"
  输出: 1
  解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
  示例 3:

  输入: s = "pwwkew"
  输出: 3
  解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
       请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。

  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/longest-substring-without-repeating-characters
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * 使用滑动窗口，滑动窗口左侧为start，右侧为end，滑动的时候记录窗口内的值，当end遇到当前窗口里已经有的值，则将start移动到这个值的下一个位置，继续滑动窗口。
 * @param {*} s
 */
var lengthOfLongestSubstring = function (s) {
  let start = 0;
  let end = 0;
  let hashMap = new Map();
  let max = 0;
  while (end <= s.length) {
    max = Math.max(max, end - start);
    if (hashMap.has(s[end])) {
      const index = hashMap.get(s[end]);
      start = Math.max(start, index + 1);
    }
    hashMap.set(s[end], end);
    end++;
  }
  return max;
};

const res = lengthOfLongestSubstring(" ");
console.log("res: ", res);
