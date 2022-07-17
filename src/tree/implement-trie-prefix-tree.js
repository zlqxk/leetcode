/**
  208. 实现 Trie (前缀树)
  Trie（发音类似 "try"）或者说 前缀树 是一种树形数据结构，用于高效地存储和检索字符串数据集中的键。这一数据结构有相当多的应用情景，例如自动补完和拼写检查。

  请你实现 Trie 类：

  Trie() 初始化前缀树对象。
  void insert(String word) 向前缀树中插入字符串 word 。
  boolean search(String word) 如果字符串 word 在前缀树中，返回 true（即，在检索之前已经插入）；否则，返回 false 。
  boolean startsWith(String prefix) 如果之前已经插入的字符串 word 的前缀之一为 prefix ，返回 true ；否则，返回 false 。
  

  示例：

  输入
  ["Trie", "insert", "search", "search", "startsWith", "insert", "search"]
  [[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]]
  输出
  [null, null, true, false, true, null, true]

  解释
  Trie trie = new Trie();
  trie.insert("apple");
  trie.search("apple");   // 返回 True
  trie.search("app");     // 返回 False
  trie.startsWith("app"); // 返回 True
  trie.insert("app");
  trie.search("app");     // 返回 True
 */

var Trie = function () {
  this.root = {};
};

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let root = this.root;
  for (let i = 0; i < word.length; i++) {
    const item = word[i];
    if (root[item]) {
      // 如果当前节点有这个字母
    } else {
      root[item] = {};
    }
    if (i === word.length - 1) {
    }
    root = root[item];
  }
  root.isEnd = true;
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  let root = this.root;
  for (let i = 0; i < word.length; i++) {
    const item = word[i];
    if (root[item]) {
      root = root[item];
    } else {
      return false;
    }
  }
  return Boolean(root.isEnd);
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  let root = this.root;
  for (let i = 0; i < prefix.length; i++) {
    const item = prefix[i];
    if (root[item]) {
      root = root[item];
    } else {
      return false;
    }
  }
  return true;
};

const trie = new Trie();

trie.insert("apple");
trie.insert("app");
trie.insert("acl");
trie.insert("bcl");
const res = trie.search("app");
console.log("res: ", res);

console.log(trie);
