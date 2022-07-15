/**
  剑指 Offer 25. 合并两个排序的链表
  输入两个递增排序的链表，合并这两个链表并使新链表中的节点仍然是递增排序的。

  示例1：

  输入：1->2->4, 1->3->4
  输出：1->1->2->3->4->4
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 * 1->2->4
 * 3->5
 * 6->7->8
 *
 */
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
    start = start.next
  }
  if (l1) {
    start.next = l1;
  }
  if (l2) {
    start.next = l2;
  }
  return head.next;
};

const res = mergeTwoLists(arr2Link([1, 2, 4]), arr2Link([1, 3]));
console.log("res: ", res);
