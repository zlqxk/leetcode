/**
  25. K 个一组翻转链表
  给你链表的头节点 head ，每 k 个节点一组进行翻转，请你返回修改后的链表。

  k 是一个正整数，它的值小于或等于链表的长度。如果节点总数不是 k 的整数倍，那么请将最后剩余的节点保持原有顺序。

  你不能只是单纯的改变节点内部的值，而是需要实际进行节点交换。

  1,2,3,4,5,6,7,8
  3,2,1,6,5,4,7,8
 */

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  let dummy = new ListNode(null, head);
  let move = dummy;
  while (head) {
    const tail = getTail(head, k);
    // 暂存下一次翻转的head
    let nextHead = tail.next;
    const res = reverse(head, tail);
    move.next = res;
    move = head;
    head = nextHead;
  }
  return dummy.next;
};

function getTail(head, k) {
  let move = new ListNode(null, head);
  for (let i = 0; i < k; i++) {
    if (move.next) {
      move = move.next;
    } else {
      return head;
    }
  }
  return move;
}

function reverse(head, tail) {
  let result = head;
  let move = head.next;
  result.next = null;
  while (result !== tail) {
    const next = move.next;
    move.next = result;
    result = move;
    move = next;
  }
  return result;
}

reverseKGroup(arr2Link([1, 2, 3, 4, 5, 6, 7, 8]), 3);
