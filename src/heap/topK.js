/**
  给定整数数组 nums 和整数 k，请返回数组中第 k 个最大的元素。

  请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。

  示例 1:

  输入: [3,2,1,5,6,4] 和 k = 2
  输出: 5
  示例 2:

  输入: [3,2,3,1,2,4,5,5,6] 和 k = 4
  输出: 4

  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/xx4gT2
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  const heap = new Heap(nums);
  for (let i = 0; i < k - 1; i++) {
    heap.pop();
  }
  return heap.heap[0];
};

class Heap {
  constructor(nums) {
    this.buildHeap(nums);
    this.heap = nums;
  }

  buildHeap(nums) {
    // 获取最后一个不是叶子节点的节点
    const lastNotLeafIndex = Math.floor(nums.length / 2) - 1;
    for (let i = lastNotLeafIndex; i >= 0; i--) {
      this.verifyHeap(nums, i);
    }
  }

  verifyHeap(nums, index) {
    const val = nums[index];
    const leftIndex = this.getLeftNode(index);
    const rightIndex = this.getRightNode(index);
    let largeIndex = index;
    if (leftIndex && nums[leftIndex] > val) {
      largeIndex = leftIndex;
    }
    if (rightIndex && nums[rightIndex] > nums[largeIndex]) {
      largeIndex = rightIndex;
    }
    if (largeIndex !== index) {
      let tmp = nums[index];
      nums[index] = nums[largeIndex];
      nums[largeIndex] = tmp;
      this.verifyHeap(nums, largeIndex);
    }
  }

  pop() {
    const tmp = this.heap[0];
    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap[this.heap.length - 1] = tmp;
    this.heap.pop();
    this.verifyHeap(this.heap, 0);
  }

  getLeftNode(n) {
    return 2 * n + 1;
  }

  getRightNode(n) {
    return 2 * n + 2;
  }
}

const res = findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4);
console.log("res: ", res);
