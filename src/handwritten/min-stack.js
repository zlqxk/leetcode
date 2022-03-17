/**
  设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。

  实现 MinStack 类:

  MinStack() 初始化堆栈对象。
  void push(int val) 将元素val推入堆栈。
  void pop() 删除堆栈顶部的元素。
  int top() 获取堆栈顶部的元素。
  int getMin() 获取堆栈中的最小元素。
   

  示例 1:

  输入：
  ["MinStack","push","push","push","getMin","pop","top","getMin"]
  [[],[-2],[0],[-3],[],[],[],[]]

  输出：
  [null,null,null,null,-3,null,0,-2]

  解释：
  MinStack minStack = new MinStack();
  minStack.push(-2);
  minStack.push(0);
  minStack.push(-3);
  minStack.getMin();   --> 返回 -3.
  minStack.pop();
  minStack.top();      --> 返回 0.
  minStack.getMin();   --> 返回 -2.

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/min-stack
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

var MinStack = function () {
  this.stack = [];
  this.minList = [Infinity];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.stack.push(val);
  this.minList.push(Math.min(val, this.minList[this.minList.length - 1]));
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.stack.pop();
  this.minList.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.minList[this.minList.length - 1];
};

const stack = new MinStack();

stack.push(2);
stack.push(0);
stack.push(3);
stack.push(0);
console.log(stack.getMin());
stack.pop();
console.log(stack.getMin());
stack.pop();
console.log(stack.getMin());
stack.pop();
console.log(stack.getMin());
console.log("stack: ", stack);
