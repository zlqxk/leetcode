/**
给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。

如果数组中不存在目标值 target，返回 [-1, -1]。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  const left = binarySearch(nums, target, false);
  const right = binarySearch(nums, target, true);
  return [left, right];
};

var binarySearch = function (nums, target, isBig) {
  let left = 0;
  let right = nums.length - 1;
  let ans = -1;
  while (right >= left) {
    const mid = Math.floor((right + left) / 2);
    if (target > nums[mid]) {
      left = mid + 1;
    } else if (target < nums[mid]) {
      right = mid - 1;
    } else {
      if (isBig) {
        ans = Math.max(ans, mid);
        left = mid + 1;
      } else {
        if (ans === -1) {
          ans = mid;
        } else {
          ans = Math.min(ans, mid);
        }
        right = mid - 1;
      }
      // return mid;
    }
  }
  return ans;
};

const index = binarySearch([5, 7, 7, 8, 8, 8, 8, 8, 8, 8, 8, 10], 8, false);
console.log("index: ", index);
