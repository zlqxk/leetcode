/**
  给你一个整数数组 nums，返回 数组 answer ，其中 answer[i] 等于 nums 中除 nums[i] 之外其余各元素的乘积 。

  题目数据 保证 数组 nums之中任意元素的全部前缀元素和后缀的乘积都在  32 位 整数范围内。

  请不要使用除法，且在 O(n) 时间复杂度内完成此题。

  示例 1:

  输入: nums = [1,2,3,4,5]
  [1,1]
  [1,2,2,4,16]
  输出: [120,60,40,30,24]
  示例 2:

  输入: nums = [-1,1,0,-3,3]
  输出: [0,0,9,0,0]

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/product-of-array-except-self
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const res = [1];
  for (let i = 1; i < nums.length; i++) {
    res.push(res[i - 1] * nums[i - 1]);
  }

  let rightNum = nums[nums.length - 1];

  for (let i = nums.length - 2; i >= 0; i--) {
    res[i] = res[i] * rightNum;
    rightNum *= nums[i];
  }

  return res;
};

const res = productExceptSelf([1, 2, 3, 4, 5]);
console.log("res: ", res);
