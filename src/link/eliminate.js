/**
  题目描述
  假设有100人，分别编号 1~100，从 1 号开始报数，报数到 3 号时，3 号就被淘汰，然后由下一人从 1 报数，以此类推​
  最后谁会留下来？
 */
function live(count) {
  let head = new ListNode(0);
  let move = head;
  for (let i = 1; i < count; i++) {
    const node = new ListNode(i);
    move.next = node;
    move = node;
  }
  move.next = head;

  // 0 -> 1 -> 3 -> 4
  while (head.next !== head) {
    const node = head.next.next.next;
    head.next.next = node;
    head = node;
  }

  return head.val;
}

const res = live(100);
console.log("res: ", res);
