/**
  给你一个整数数组 nums ，请你找出数组中乘积最大的非空连续子数组（该子数组中至少包含一个数字），并返回该子数组所对应的乘积。

  测试用例的答案是一个 32-位 整数。

  子数组 是数组的连续子序列。
   
  f.max(i) = (1 - n)max{f.max(i - 1) * nums[i], f.min(i - 1) * nums[i], f.max(i - 1)}
  f.min(i) = (1 - n)min{f.max(i - 1) * nums[i], f.min(i - 1) * nums[i], f.max(i - 1)}

  示例 1:

  输入: nums = [2,3,-2,4]
  输出: 6
  解释: 子数组 [2,3] 有最大乘积 6。
  示例 2:

  输入: nums = [-2,0,-1]
  输出: 0
  解释: 结果不能为 2, 因为 [-2,-1] 不是子数组。

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/maximum-product-subarray
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let max = nums[0];
  let prevMax = nums[0];
  let prevMin = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const _prevMax = prevMax;
    const _preMin = prevMin;
    prevMax = Math.max(_prevMax * nums[i], nums[i], nums[i] * _preMin);
    prevMin = Math.min(_preMin * nums[i], nums[i], nums[i] * _prevMax);
    max = Math.max(prevMax, max);
  }
  return max;
};

const res = maxProduct([2, 3, -2, -4]);
console.log("res: ", res);
