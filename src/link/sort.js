/**
  剑指 Offer II 077. 链表排序
  给定链表的头结点 head ，请将其按 升序 排列并返回 排序后的链表 。

  示例 1：

  输入：head = [4,2,1,3]
  输出：[1,2,3,4]
  示例 2：

  输入：head = [-1,5,3,4,0]
  输出：[-1,0,3,4,5]
  示例 3：

  输入：head = []
  输出：[]
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 * 使用归并排序
 * 将链表以中点拆分，中点可以通过快慢指针来获得
 * 一直拆到只有一个节点
 */
function sortList(head, tail = null) {
  if (head === null) {
    return head;
  }
  if (head.next === tail) {
    head.next = null;
    return head;
  }
  let slow = head,
    fast = head;
  while (fast !== tail) {
    slow = slow.next;
    fast = fast.next;
    if (fast !== tail) {
      fast = fast.next;
    }
  }
  const mid = slow;
  return mergeLink(sortList(head, mid), sortList(mid, tail));
}

function mergeLink(link1, link2) {
  let start = new ListNode(null);
  const result = start;
  while (link1 && link2) {
    if (link1.val < link2.val) {
      start.next = link1;
      link1 = link1.next;
    } else {
      start.next = link2;
      link2 = link2.next;
    }
    start = start.next;
  }
  if (link1) {
    start.next = link1;
  } else {
    start.next = link2;
  }
  return result.next;
}

const res = sortList(arr2Link([-5, 4, 0]));
console.log("res: ", res);

// const res2 = mergeLink(arr2Link([1, 5, 7]), arr2Link([2, 4, 6]));
// console.log("res2: ", res2);
