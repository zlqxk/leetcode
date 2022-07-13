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
 * 翻转k个节点，就是记录一个头结点，走k次next，得到一个小的链表，然后将这个小链表翻转
 * 翻转完小链表需要将这个小链表的头尾节点和原来的链表接上
 * 需要记录小链表左右两侧的节点
 * 需要记录小链表的头尾节点
 * 一共需要记录四个节点
 */
var reverseKGroup = function (head, k) {
  const mHead = new ListNode(null);
  mHead.next = head;
  let prev = mHead;
  while (head) {
    // 要翻转链表的尾结点
    const tail = getTail(head, k);
    // 先记录一下下次循环要翻转的链表的头结点
    const nextHead = tail.next;
    // 翻转后链表的头结点
    const reverseHead = reverseList(head, tail);
    prev.next = reverseHead;
    prev = head;
    head = nextHead;
  }
  return mHead;
};

reverseKGroup(arr2Link([1, 2, 3, 4, 5, 6, 7, 8]), 3);

/**
 * 1->2->3->4
 * 4->3->2->1
 * @param {*} head
 * @param {*} tail
 * @returns
 */
function reverseList(head, tail) {
  let left = tail.next;
  let right = head;
  while (left !== tail) {
    const next = right.next;
    right.next = left;
    left = right;
    right = next;
  }
  return tail;
}

/**
 * a -> b -> c -> d,  3
 *
 * @param {*} nodeList
 * @param {*} k
 * @returns 第k个节点
 */
function getTail(nodeList, k) {
  let move = nodeList;
  let index = 0;
  while (true) {
    index++;
    if (move) {
      if (index === k) return move;
      move = move.next;
    } else {
      return nodeList;
    }
  }
}
