/**
  请你设计并实现一个满足  LRU (最近最少使用) 缓存 约束的数据结构。
  实现 LRUCache 类：
  LRUCache(int capacity) 以 正整数 作为容量 capacity 初始化 LRU 缓存
  int get(int key) 如果关键字 key 存在于缓存中，则返回关键字的值，否则返回 -1 。
  void put(int key, int value) 如果关键字 key 已经存在，则变更其数据值 value ；如果不存在，则向缓存中插入该组 key-value 。如果插入操作导致关键字数量超过 capacity ，则应该 逐出 最久未使用的关键字。
  函数 get 和 put 必须以 O(1) 的平均时间复杂度运行。

  输入
  ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
  [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
  输出
  [null, null, null, 1, null, -1, null, -1, 3, 4]

  解释
  LRUCache lRUCache = new LRUCache(2);
  lRUCache.put(1, 1); // 缓存是 {1=1}
  lRUCache.put(2, 2); // 缓存是 {1=1, 2=2}
  lRUCache.get(1);    // 返回 1
  lRUCache.put(3, 3); // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}
  lRUCache.get(2);    // 返回 -1 (未找到)
  lRUCache.put(4, 4); // 该操作会使得关键字 1 作废，缓存是 {4=4, 3=3}
  lRUCache.get(1);    // 返回 -1 (未找到)
  lRUCache.get(3);    // 返回 3
  lRUCache.get(4);    // 返回 4

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/lru-cache
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

class LinkNode {
  constructor(value, key, prev, next) {
    this.value = value;
    this.prev = prev;
    this.next = next;
    this.key = key;
  }
}

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.length = capacity;
  this.hashMap = new Map();
  this.header = new LinkNode("header");
  this.footer = new LinkNode("footer");
  this.header.next = this.footer;
  this.footer.prev = this.header;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (this.hashMap.has(key)) {
    const node = this.hashMap.get(key);
    node.prev.next = node.next;
    node.next.prev = node.prev;
    const headerNext = this.header.next;
    this.header.next = node;
    node.next = headerNext;
    node.prev = this.header;
    headerNext.prev = node;
    return node.value;
  }
  return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.hashMap.has(key)) {
    // return this.hashMap.get(key);
    const node = this.hashMap.get(key);
    node.value = value;
    node.prev.next = node.next;
    node.next.prev = node.prev;
    const headerNext = this.header.next;
    this.header.next = node;
    node.next = headerNext;
    node.prev = this.header;
    headerNext.prev = node;
  } else {
    const node = new LinkNode(value, key);
    this.hashMap.set(key, node);
    const next = this.header.next;
    this.header.next = node;
    node.next = next;
    next.prev = node;
    node.prev = this.header;
  }
  if (this.hashMap.size > this.length) {
    const key = this.footer.prev.key;
    this.hashMap.delete(key);
    this.footer.prev = this.footer.prev.prev;
    this.footer.prev.next = this.footer;
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

const lRUCache = new LRUCache(2);
console.log(lRUCache.get(2));
lRUCache.put(2, 6);
console.log(lRUCache.get(1));
lRUCache.put(1, 5);
lRUCache.put(1, 2);
console.log(lRUCache.get(1));
console.log(lRUCache.get(2));
