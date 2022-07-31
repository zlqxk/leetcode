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
 */
var mergeKLists = function (lists) {
  if (lists.length === 0) return null;
  if (lists.length === 1) return lists[0];
  const combine = [];
  for (let i = 0; i < lists.length; i += 2) {
    const newList = mergeTwoLists(lists[i], lists[i + 1]);
    combine.push(newList);
  }
  return mergeKLists(combine);
};

var mergeTwoLists = function (list1, list2) {
  const dummyHead = new ListNode(null);
  let move = dummyHead;
  while (list1 && list2) {
    if (list1.val > list2.val) {
      move.next = list2;
      list2 = list2.next;
    } else {
      move.next = list1;
      list1 = list1.next;
    }
    move = move.next;
  }
  if (list1) {
    move.next = list1;
  } else {
    move.next = list2;
  }
  return dummyHead.next ?? null;
};
