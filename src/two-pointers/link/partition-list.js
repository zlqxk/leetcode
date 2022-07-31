/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  let dummy = new ListNode(null);
  let dummyMove = dummy;
  let move = head;
  let prev = new ListNode(null, head);
  let dummyHead = prev;
  while (move) {
    if (move.val >= x) {
      prev.next = move.next;
      move.next = null;
      dummyMove.next = move;
      dummyMove = dummyMove.next;
      move = prev.next;
    } else {
      prev = move;
      move = move.next;
    }
  }
  prev.next = dummy.next;
  return dummyHead.next;
};
