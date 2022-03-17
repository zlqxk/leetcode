/**
  给你一个字符串 s 和一个字符串列表 wordDict 作为字典。请你判断是否可以利用字典中出现的单词拼接出 s 。

  注意：不要求字典中出现的单词全部都使用，并且字典中的单词可以重复使用。

  示例 1：

  输入: s = "leetacode", wordDict = ["leet", "code"]
  输出: true
  解释: 返回 true 因为 "leetcode" 可以由 "leet" 和 "code" 拼接成。
  示例 2：

  输入: s = "applepenapple", wordDict = ["apple", "pen"]
  输出: true
  解释: 返回 true 因为 "applepenapple" 可以由 "apple" "pen" "apple" 拼接成。
       注意，你可以重复使用字典中的单词。
  示例 3：

  输入: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
  输出: false

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/word-break
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  let hashMap = new Map();
  let arr = [true];
  for (let i = 0; i < wordDict.length; i++) {
    hashMap.set(wordDict[i], i);
  }
  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[j] && hashMap.has(s.substring(j, i))) {
        arr[i] = true;
        break;
      } else {
        arr[i] = false;
      }
    }
  }
  console.log("arr: ", arr);
  return arr[s.length];
};

const res = wordBreak("leetcode", ["leet", "code"]);
// const res = wordBreak("applepenapple", ["apple", "pen"]);
// const res = wordBreak("a", ["b"]);
// const res = wordBreak("cars", ["car", "ca", "rs"]);
console.log("res: ", res);
