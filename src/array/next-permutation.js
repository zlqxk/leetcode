/**
整数数组的一个 排列  就是将其所有成员以序列或线性顺序排列。

例如，arr = [1,2,3] ，以下这些都可以视作 arr 的排列：[1,2,3]、[1,3,2]、[3,1,2]、[2,3,1] 。
整数数组的 下一个排列 是指其整数的下一个字典序更大的排列。更正式地，如果数组的所有排列根据其字典顺序从小到大排列在一个容器中，那么数组的 下一个排列 就是在这个有序容器中排在它后面的那个排列。如果不存在下一个更大的排列，那么这个数组必须重排为字典序最小的排列（即，其元素按升序排列）。

例如，arr = [1,2,3] 的下一个排列是 [1,3,2] 。
类似地，arr = [2,3,1] 的下一个排列是 [3,1,2] 。
而 arr = [3,2,1] 的下一个排列是 [1,2,3] ，因为 [3,2,1] 不存在一个字典序更大的排列。
给你一个整数数组 nums ，找出 nums 的下一个排列。

必须 原地 修改，只允许使用额外常数空间

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/next-permutation
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

// 3,4,1,12,2,15,14

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  let max = 0;
  let i_index = -1;
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] >= max) {
      max = nums[i];
    } else {
      i_index = i;
      break;
    }
  }
  for (let j = nums.length - 1; j >= 0; j--) {
    if (nums[j] > nums[i_index]) {
      let mid = nums[i_index];
      nums[i_index] = nums[j];
      nums[j] = mid;
      break;
    }
  }
  reverseArr(nums, i_index + 1, nums.length - 1);
};

function reverseArr(arr, start, end) {
  let n = 0;
  for (let i = start; i < (end + start) / 2; i++) {
    let mid = arr[i];
    arr[i] = arr[end - n];
    arr[end - n] = mid;
    n++;
  }
}

const nums = [5, 1, 1];
// let nums = [3, 4, 1, 12, 16, 15, 14, 2];
nextPermutation(nums);
// reverseArr(nums, 5, 7);
console.log("nums: ", nums);
