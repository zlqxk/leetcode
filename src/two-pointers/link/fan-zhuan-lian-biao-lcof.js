/**
  定义一个函数，输入一个链表的头节点，反转该链表并输出反转后链表的头节点。

  示例:

  输入: 1->2->3->4->5->NULL
  输出: 5->4->3->2->1->NULL

  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/fan-zhuan-lian-biao-lcof
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 * 两个指针来记录要交换的节点
 * 一开始没有左边的先设置为null
 * 右边的为第一个节点
 * 提前存下一个节点
 * 将右边节点的next指向左边
 * 左边设置为右边
 * 右边设置为下一个
 * 继续交换
 */
var reverseList = function (head) {
  let left = null;
  let right = head;
  while (right) {
    const next = right.next;
    right.next = left;
    left = right;
    right = next;
  }
  return left;
};

const res = reverseList(arr2Link([1, 2, 3, 4, 5]));
console.log('res: ', res);
