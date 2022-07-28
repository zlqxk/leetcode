/**
  567. 字符串的排列
  给你两个字符串 s1 和 s2 ，写一个函数来判断 s2 是否包含 s1 的排列。如果是，返回 true ；否则，返回 false 。

  换句话说，s1 的排列之一是 s2 的 子串 。

  示例 1：

  输入：s1 = "ab" s2 = "eidbaooo"
  输出：true
  解释：s2 包含 s1 的排列之一 ("ba").
  示例 2：

  输入：s1= "ab" s2 = "eidboaoo"
  输出：false
 */

/**
  声明left和right两个指针
  声明一个windowMap和needMap
  1、right遍历字符串
  2、如果needMap.has(s2[right])，windowMap添加当前字符
  3、直到windowMap包含所有的needMap元素
  4、开始left++
  5、如果left++以后windMap不符合规则，则继续移动right
  6、重复步骤3
  7、如果最后出现当期子串长度和s1长度相同则返回true
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  let left = 0,
    right = 0;
  let index = 0;
  let windowMap = new Map(),
    needMap = new Map();
  for (const item of s1) {
    needMap.set(item, needMap.get(item) ? needMap.get(item) + 1 : 1);
    windowMap.set(item, 0);
  }
  while (right < s2.length) {
    const rightStr = s2[right];
    right++;
    if (needMap.has(rightStr)) {
      windowMap.set(rightStr, windowMap.get(rightStr) + 1);
      if (windowMap.get(rightStr) === needMap.get(rightStr)) {
        index++;
      }
    }

    while (index === needMap.size) {
      const leftStr = s2[left];
      const len = right - left;
      if (len === s1.length) return true;
      left++;
      if (windowMap.has(leftStr)) {
        if (windowMap.get(leftStr) === needMap.get(leftStr)) {
          index--;
        }
        windowMap.set(leftStr, windowMap.get(leftStr) - 1);
      }
    }
  }
  return false;
};
