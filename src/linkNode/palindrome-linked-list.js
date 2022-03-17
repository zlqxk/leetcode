/**
   给你一个单链表的头节点 head ，请你判断该链表是否为回文链表。如果是，返回 true ；否则，返回 false 。

  示例 1：


  输入：head = [1,2,3,2,1]
  [1,2,3,2,1]
  输出：true
  示例 2：


  输入：head = [1,2]
  输出：false

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/palindrome-linked-list
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let arr = [];
  let wipNode = head;
  while (wipNode) {
    arr.push(wipNode.val);
    wipNode = wipNode.next;
  }
  let start = 0;
  let end = arr.length - 1;
  while (end > start) {
    if (arr[start] !== arr[end]) return false;
    end--;
    start++;
  }
  return true;
};
