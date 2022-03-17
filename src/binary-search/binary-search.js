/**
给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/binary-search
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;
  // 1,2,3,4, 5
  // 0, 3
  while (end >= start) {
    const midIndex = Math.floor((start + end) / 2);
    if (nums[midIndex] > target) {
      end = midIndex - 1;
    } else if (nums[midIndex] < target) {
      start = midIndex + 1;
    } else {
      return midIndex;
    }
  }
  return -1
};

const index = search([-1, 0, 3, 5, 9, 12], 2);
console.log("index: ", index);
