/**
  438. 找到字符串中所有字母异位词
  给定两个字符串 s 和 p，找到 s 中所有 p 的 异位词 的子串，返回这些子串的起始索引。不考虑答案输出的顺序。

  异位词 指由相同字母重排列形成的字符串（包括相同的字符串）。
  
  示例 1:

  输入: s = "cbaebabacd", p = "abc"
  输出: [0,6]
  解释:
  起始索引等于 0 的子串是 "cba", 它是 "abc" 的异位词。
  起始索引等于 6 的子串是 "bac", 它是 "abc" 的异位词。
  示例 2:

  输入: s = "abab", p = "ab"
  输出: [0,1,2]
  解释:
  起始索引等于 0 的子串是 "ab", 它是 "ab" 的异位词。
  起始索引等于 1 的子串是 "ba", 它是 "ab" 的异位词。
  起始索引等于 2 的子串是 "ab", 它是 "ab" 的异位词。
 */

/**
 * 当前窗口包含p里所有的字符，并且窗口长度和p的长度相同
 * 需要一个windowMap（窗口）、needMap（记录p，因为p可能有重复）
 * 需要一个index来判断是否满足条件
 * 移动right，直到窗口包含p
 * 然后移动left，直到恰好满足窗口长度和p的长度相同，记录left
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  let left = 0;
  let right = 0;
  let index = 0;
  let list = [];
  let ans = [];
  let windowMap = new Map();
  let needMap = new Map();
  // 初始化needMap
  for (let i = 0; i < p.length; i++) {
    needMap.set(p[i], needMap.has(p[i]) ? needMap.get(p[i]) + 1 : 1);
  }

  while (right < s.length) {
    const rightStr = s[right];
    right++;
    // 如果当前字符在needMap内，则将其添加到windowMap
    list.push(rightStr);

    if (needMap.has(rightStr)) {
      windowMap.set(
        rightStr,
        windowMap.has(rightStr) ? windowMap.get(rightStr) + 1 : 1
      );
      // 当前字符都在windowMap中则index计数
      if (windowMap.get(rightStr) === needMap.get(rightStr)) {
        index++;
      }
    }

    while (index === needMap.size) {
      // 当前窗口包含p里所有的字符，并且窗口长度和p的长度相同
      if (list.length === p.length) {
        ans.push(left);
      }

      const leftStr = s[left];
      left++;
      list.shift();
      if (windowMap.has(leftStr)) {
        if (windowMap.get(leftStr) === needMap.get(leftStr)) {
          index--;
        }
        windowMap.set(leftStr, windowMap.get(leftStr) - 1);
      }
    }
  }

  return ans;
};

const res = findAnagrams("abab", "ab");
console.log("res: ", res);
