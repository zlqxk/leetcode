/**
  76. 最小覆盖子串
  给你一个字符串 s 、一个字符串 t 。返回 s 中涵盖 t 所有字符的最小子串。如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 "" 。

  注意：

  对于 t 中重复字符，我们寻找的子字符串中该字符数量必须不少于 t 中该字符数量。
  如果 s 中存在这样的子串，我们保证它是唯一的答案。
  

  示例 1：

  输入：s = "ADOBECODEBANC", t = "ABC"
  输出："BANC"
  示例 2：

  输入：s = "a", t = "a"
  输出："a"
  示例 3:

  输入: s = "a", t = "aa"
  输出: ""
  解释: t 中两个字符 'a' 均应包含在 s 的子串中，
  因此没有符合条件的子字符串，返回空字符串。
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  let left = 0;
  let right = 0;
  let tMap = new Map();
  let windowMap = new Map();
  for (const item of t) {
    tMap.set(item, tMap.has(item) ? tMap.get(item) + 1 : 1);
    windowMap.set(item, 0);
  }
  let start = 0;
  let end = -Infinity;
  let min = Infinity;
  let index = 0;

  while (right < s.length) {
    // 如果当前字符在t中
    if (tMap.has(s[right])) {
      windowMap.set(s[right], windowMap.get(s[right]) + 1);
      if (tMap.get(s[right]) === windowMap.get(s[right])) {
        index++;
      }
    }

    // 当前字符串已经符合要求
    while (index === tMap.size) {
      if (right - left < min) {
        min = right - left;
        start = left;
        end = right;
      }

      if (windowMap.has(s[left])) {
        if (windowMap.get(s[left]) === tMap.get(s[left])) {
          index--;
        }
        windowMap.set(s[left], windowMap.get(s[left]) - 1);
      }
      left++;
    }

    right++;
  }

  return s.substring(start, end + 1);
};
