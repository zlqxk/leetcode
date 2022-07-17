/**
  146. LRU 缓存
  请你设计并实现一个满足  LRU (最近最少使用) 缓存 约束的数据结构。
  实现 LRUCache 类：
  LRUCache(int capacity) 以 正整数 作为容量 capacity 初始化 LRU 缓存
  int get(int key) 如果关键字 key 存在于缓存中，则返回关键字的值，否则返回 -1 。
  void put(int key, int value) 如果关键字 key 已经存在，则变更其数据值 value ；如果不存在，则向缓存中插入该组 key-value 。如果插入操作导致关键字数量超过 capacity ，则应该 逐出 最久未使用的关键字。
  函数 get 和 put 必须以 O(1) 的平均时间复杂度运行。

  示例：

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
 */

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.cache = new Map();
  this.head = new DoubleLink("head");
  this.footer = new DoubleLink("footer");
  this.head.next = this.footer;
  this.footer.prev = this.head;
  this.doubleLink = this.head;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  const node = this.cache.get(key);
  if (!node) return -1;
  this.doubleLink.delete(node);
  this.doubleLink.add(this.head, node);
  return node.val;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.cache.has(key)) {
    const node = this.cache.get(key);
    this.doubleLink.delete(node);
    node.val = value;
    node.key = key;
    this.doubleLink.add(this.head, node);
    this.cache.set(key, node);
    return;
  }
  if (this.cache.size >= this.capacity) {
    // 删除缓存
    const node = this.footer.prev;
    this.doubleLink.delete(this.footer.prev);
    this.cache.delete(node.key);
  }
  const node = new DoubleLink(value, key);
  this.doubleLink.add(this.head, node);
  this.cache.set(key, node);
};

function DoubleLink(val, key, next, prev) {
  this.val = val;
  this.key = key;
  this.next = next;
  this.prev = prev;
}

DoubleLink.prototype.add = function (node1, node2) {
  const tmp = node1.next;
  node1.next = node2;
  node2.next = tmp;
  tmp.prev = node2;
  node2.prev = node1;
};

DoubleLink.prototype.delete = function (node) {
  const prev = node.prev;
  const next = node.next;
  prev.next = next;
  next.prev = prev;
};

const lruCache = new LRUCache(2);
// console.log(
//   lruCache.get(2),
//   lruCache.put(2, 6),
//   lruCache.get(1),
//   lruCache.put(1, 5),
//   lruCache.put(1, 2),
//   lruCache.get(1),
//   lruCache.get(2)
// );
console.log(
  lruCache.put(2, 1),
  lruCache.put(1, 1),
  lruCache.put(2, 3),
  lruCache.put(4, 1),
  lruCache.get(1),
  lruCache.get(2)
);
console.log(lruCache);
