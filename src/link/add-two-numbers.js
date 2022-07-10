/**
  给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。

  请你将两个数相加，并以相同形式返回一个表示和的链表。

  你可以假设除了数字 0 之外，这两个数都不会以 0 开头。

  示例 1：

  输入：l1 = [2,4,3], l2 = [5,6,4]
  输出：[7,0,8]
  解释：342 + 465 = 807.
  示例 2：

  输入：l1 = [0], l2 = [0]
  输出：[0]
  示例 3：

  输入：l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
  输出：[8,9,9,9,0,0,0,1]

  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/add-two-numbers
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。\
 */

/**
 * 遍历两个链表，每一位相加，相加后的结果模10就是这位，除以10向下取整就是进位，如果最后进位的值大于0，说明还要在最后加1。
 * @param {*} l1
 * @param {*} l2
 */

var addTwoNumbers = function (l1, l2) {
  let extra = 0;
  let root = new ListNode();
  let next = root;
  while (l1 || l2) {
    const l1Node = l1?.val ?? 0;
    const l2Node = l2?.val ?? 0;
    const val = (l1Node + l2Node + extra) % 10;
    extra = Math.floor((l1Node + l2Node + extra) / 10);
    next.next = new ListNode(val);
    l1 = l1?.next;
    l2 = l2?.next;
    next = next.next;
  }
  if (extra > 0) {
    next.next = new ListNode(1);
  }
  return root.next;
};

addTwoNumbers(arr2Link([9, 9, 9, 9, 9, 9, 9, 9]), arr2Link([9, 9, 9, 9]));
