/**
给你一个字符串数组，请你将 字母异位词 组合在一起。可以按任意顺序返回结果列表。

字母异位词 是由重新排列源单词的字母得到的一个新单词，所有源单词中的字母通常恰好只用一次。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/group-anagrams
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

输入: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
输出: [["bat"],["nat","tan"],["ate","eat","tea"]]
 */

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let hashMap = new Map();
  let res = [];
  for (let i = 0; i < strs.length; i++) {
    let item = strs[i];
    const arr = new Array(26).fill(0);
    for (let j = 0; j < item.length; j++) {
      arr[item[j].charCodeAt() - "a".charCodeAt()]++;
    }
    if (hashMap.has(`${arr}`)) {
      hashMap.set(`${arr}`, [...hashMap.get(`${arr}`), item]);
    } else {
      hashMap.set(`${arr}`, [item]);
    }
  }
  hashMap.forEach(value => res.push(value));
  return res;
};

const res = groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
console.log("res: ", res);
