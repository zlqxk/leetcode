/**
  34. 在排序数组中查找元素的第一个和最后一个位置
  给你一个按照非递减顺序排列的整数数组 nums，和一个目标值 target。请你找出给定目标值在数组中的开始位置和结束位置。

  如果数组中不存在目标值 target，返回 [-1, -1]。

  你必须设计并实现时间复杂度为 O(log n) 的算法解决此问题。

  示例 1：

  输入：nums = [5,7,7,8,8,10], target = 8
  输出：[3,4]
  示例 2：

  输入：nums = [5,7,7,8,8,10], target = 6
  输出：[-1,-1]
  示例 3：

  输入：nums = [], target = 0
  输出：[-1,-1]
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 [5,8,8,8,8,10,11]
 */
var searchRange = function (nums, target) {
  const leftRange = searchLeft(nums, target);
  const rightRange = searchRight(nums, target);
  return [leftRange, rightRange];
};

var searchLeft = function (nums, target) {
  console.log(nums, "searchLeft");
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      right = mid - 1;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    }
  }

  return nums[left] === target ? left : -1;
};

var searchRight = function (nums, target) {
  console.log(nums, "searchRight");
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      left = mid + 1;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    }
  }

  return nums[left - 1] === target ? left - 1 : -1;
};
