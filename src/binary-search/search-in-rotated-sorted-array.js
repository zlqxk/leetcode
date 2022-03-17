/**
整数数组 nums 按升序排列，数组中的值 互不相同 。

在传递给函数之前，nums 在预先未知的某个下标 k（0 <= k < nums.length）上进行了 旋转，
使数组变为 [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]（下标 从 0 开始 计数）。
例如， [0,1,2,4,5,6,7] 在下标 3 处经旋转后可能变为 [10,11,12,13,0,1,2,6,7,8] 。

给你 旋转后 的数组 nums 和一个整数 target ，如果 nums 中存在这个目标值 target ，则返回它的下标，否则返回 -1 。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/search-in-rotated-sorted-array
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (right >= left) {
    let midIndex = Math.floor((left + right) / 2);
    if (nums[midIndex] == target) return midIndex;
    if (nums[left] <= nums[midIndex]) {
      // 说明是左边的是升序
      if (target <= nums[midIndex] && target >= nums[left]) {
        right = midIndex - 1;
      } else {
        left = midIndex + 1;
      }
    } else {
      // 说明右边是升序
      if (target >= nums[midIndex] && target <= nums[right]) {
        left = midIndex + 1;
      } else {
        right = midIndex - 1;
      }
    }
  }
  return -1;
};

const index = search([3, 1], 1);
console.log("index: ", index);
