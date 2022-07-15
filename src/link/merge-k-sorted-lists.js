/**
  23. 合并K个升序链表
  给你一个链表数组，每个链表都已经按升序排列。

  请你将所有链表合并到一个升序链表中，返回合并后的链表。

  示例 1：

  输入：lists = [[1,4,5],[1,3,4],[2,6]]
  输出：[1,1,2,3,4,4,5,6]
  解释：链表数组如下：
  [
    1->4->5,
    1->3->4,
    2->6
  ]
  将它们合并到一个有序链表中得到。
  1->1->2->3->4->4->5->6
  示例 2：

  输入：lists = []
  输出：[]
  示例 3：

  输入：lists = [[]]
  输出：[]
 */

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 * 合并k个升序列表就是合并多次两个升序列表
 * 使用分治来降低合并次数
 * l1和l2，l3和l4
 */
var mergeKLists = function (lists) {
  if (lists.length === 1) return lists[0];
  if (lists.length === 0) return null;
  let newLists = [];
  for (let i = 0; i < lists.length; i += 2) {
    const first = lists[i];
    const second = lists[i + 1];
    if (!second) {
      newLists.push(first);
    } else {
      const newLink = mergeTwoLists(first, second);
      newLists.push(newLink);
    }
  }
  return mergeKLists(newLists);
};

var mergeTwoLists = function (l1, l2) {
  let start = new ListNode(null);
  const head = start;
  while (l1 && l2) {
    if (l1.val >= l2.val) {
      start.next = l2;
      l2 = l2.next;
    } else {
      start.next = l1;
      l1 = l1.next;
    }
    start = start.next;
  }
  if (l1) {
    start.next = l1;
  }
  if (l2) {
    start.next = l2;
  }
  return head.next;
};

const res = mergeKLists([
  arr2Link([1, 4, 5]),
  arr2Link([1, 3, 4]),
  arr2Link([2, 6]),
]);
console.log("res: ", res);
