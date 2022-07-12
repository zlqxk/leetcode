/**
  整数数组的一个 排列  就是将其所有成员以序列或线性顺序排列。

  例如，arr = [1,2,3] ，以下这些都可以视作 arr 的排列：[1,2,3]、[1,3,2]、[3,1,2]、[2,3,1] 。
  整数数组的 下一个排列 是指其整数的下一个字典序更大的排列。更正式地，如果数组的所有排列根据其字典顺序从小到大排列在一个容器中，
  那么数组的 下一个排列 就是在这个有序容器中排在它后面的那个排列。如果不存在下一个更大的排列，那么这个数组必须重排为字典序最小的排列（即，其元素按升序排列）。

  例如，arr = [1,2,3] 的下一个排列是 [1,3,2] 。
  类似地，arr = [2,3,1] 的下一个排列是 [3,1,2] 。
  而 arr = [3,2,1] 的下一个排列是 [1,2,3] ，因为 [3,2,1] 不存在一个字典序更大的排列。
  给你一个整数数组 nums ，找出 nums 的下一个排列。

  必须 原地 修改，只允许使用额外常数空间。

  示例 1：

  输入：nums = [1,2,3]
  输出：[1,3,2]
  示例 2：

  输入：nums = [3,2,1]
  输出：[1,2,3]
  示例 3：

  输入：nums = [1,1,5]
  输出：[1,5,1]

  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/next-permutation
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
  [1,2,3,9,7,8]
  [1,2,3,9,7,8]
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * 下一个排列有两个规则
 * 为了保证变大的幅度尽可能的小，所以我们要尽量找靠后的一个数字，然后将它替换成一个大数，然后这个大数还要尽可能的小。
 * 例如 [1,2,8,9,7,3]，9，7和3都不能互相替换，因为从后面看是升序的，换完数字只能变小
 * 所以我们要找到第一个降序的，让他和右边第一个比他大的数交换
 * [1,2,9,8,7,3]
 * 此刻右边一定是降序的
 * 这时将右边降序的翻转一下保证后续的数最小
 */
var nextPermutation = function (nums) {
  let minIndex = -1;
  let maxIndex = -1;
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] > nums[i - 1]) {
      minIndex = i - 1;
      break;
    }
  }
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] > nums[minIndex]) {
      maxIndex = i;
      break;
    }
  }
  if (minIndex >= 0) {
    const mid = nums[minIndex];
    nums[minIndex] = nums[maxIndex];
    nums[maxIndex] = mid;
  }

  let end = nums.length - 1;
  let start = minIndex + 1;

  while (end > start) {
    const mid = nums[end];
    nums[end] = nums[start];
    nums[start] = mid;
    start++;
    end--;
  }

  return nums;
};

const res = nextPermutation([1, 3, 2]);
console.log("res: ", res);
