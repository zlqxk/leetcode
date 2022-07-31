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
  return dummyHead.next;
};
