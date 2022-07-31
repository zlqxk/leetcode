/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  let slow = head;
  let fast = head;
  while (fast) {
    slow = slow.next;
    fast = fast.next;
    if (fast) {
      fast = fast.next;
    } else {
      return null;
    }
    if (slow === fast) {
      let prev = head;
      while (prev !== slow) {
        prev = prev.next;
        slow = slow.next;
      }
      return prev;
    }
  }
  return null;
};
