/**
  225. 用队列实现栈
  请你仅使用两个队列实现一个后入先出（LIFO）的栈，并支持普通栈的全部四种操作（push、top、pop 和 empty）。

  实现 MyStack 类：

  void push(int x) 将元素 x 压入栈顶。
  int pop() 移除并返回栈顶元素。
  int top() 返回栈顶元素。
  boolean empty() 如果栈是空的，返回 true ；否则，返回 false 。
  

  注意：

  你只能使用队列的基本操作 —— 也就是 push to back、peek/pop from front、size 和 is empty 这些操作。
  你所使用的语言也许不支持队列。 你可以使用 list （列表）或者 deque（双端队列）来模拟一个队列 , 只要是标准的队列操作即可。
  

  示例：

  输入：
  ["MyStack", "push", "push", "top", "pop", "empty"]
  [[], [1], [2], [], [], []]
  输出：
  [null, null, null, 2, 2, false]

  解释：
  MyStack myStack = new MyStack();
  myStack.push(1);
  myStack.push(2);
  myStack.top(); // 返回 2
  myStack.pop(); // 返回 2
  myStack.empty(); // 返回 False
 */

var MyStack = function () {
  this.queue1 = [];
  this.queue2 = [];
  this.cur = 1;
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  if (this.cur === 1) {
    this.queue1.push(x);
  } else {
    this.queue2.push(x);
  }
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
  if (this.cur === 1) {
    this.cur = 2;
    let len = this.queue1.length;
    for (let i = 0; i < len - 1; i++) {
      const v = this.queue1.shift();
      this.queue2.push(v);
    }
    return this.queue1.pop();
  } else {
    this.cur = 1;
    let len = this.queue2.length;
    for (let i = 0; i < len - 1; i++) {
      const v = this.queue2.shift();
      this.queue1.push(v);
    }
    return this.queue2.pop();
  }
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
  if (this.cur === 1) {
    return this.queue1[this.queue1.length - 1];
  } else {
    return this.queue2[this.queue2.length - 1];
  }
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  if (this.cur === 1) {
    return this.queue1.length === 0;
  } else {
    return this.queue2.length === 0;
  }
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
