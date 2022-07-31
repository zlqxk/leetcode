/**
  19. 删除链表的倒数第 N 个结点
  给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。

  示例 1：

  输入：head = [1,2,3,4,5], n = 2
  输出：[1,2,3,5]
  示例 2：

  输入：head = [1], n = 1
  输出：[]
  示例 3：

  输入：head = [1,2], n = 1
  输出：[1]
 */

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let dummy = new ListNode(null, head);
  let before = dummy;
  let after = head;

  while (n) {
    n--;
    after = after.next;
  }

  while (after) {
    after = after.next;
    before = before.next;
  }

  before.next = before.next.next;
  return dummy.next;
};
