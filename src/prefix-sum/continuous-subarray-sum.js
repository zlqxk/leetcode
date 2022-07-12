/**
  523. 连续的子数组和
  给你一个整数数组 nums 和一个整数 k ，编写一个函数来判断该数组是否含有同时满足下述条件的连续子数组：

  子数组大小 至少为 2 ，且
  子数组元素总和为 k 的倍数。
  如果存在，返回 true ；否则，返回 false 。

  如果存在一个整数 n ，令整数 x 符合 x = n * k ，则称 x 是 k 的一个倍数。0 始终视为 k 的一个倍数。

  示例 1：

  输入：nums = [23,2,4,6,7], k = 6
  输出：true
  解释：[2,4] 是一个大小为 2 的子数组，并且和为 6 。
  示例 2：

  输入：nums = [23,2,6,4,7], k = 6
  输出：true
  解释：[23, 2, 6, 4, 7] 是大小为 5 的子数组，并且和为 42 。 
  42 是 6 的倍数，因为 42 = 7 * 6 且 7 是一个整数。
  示例 3：

  输入：nums = [23,2,6,4,7], k = 13
  输出：false
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 * 这道题感觉像是一道数学题，首先有一个很重要的定理就是同余定理，就是 (a - b) / k = s ---> a % k = b % k
 * 又因为是连续子数组，所以可以通过前缀和 sum[j] = sum[j + k] - sum[k]
 * 所以遍历数组，算出每一个下标的前缀和，将这个前缀和模 k，将结果存在哈希表里。如果后面有另一个前缀和 模k等于相同的结果，并且相差的坐标大于2，则存在倍数。
 */
var checkSubarraySum = function (nums, k) {
  const hash = new Map();
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    const modValue = sum % k;
    if (modValue === 0 && i >= 1) return true;
    if (hash.has(modValue)) {
      const index = hash.get(modValue);
      if (i - index >= 2) {
        return true;
      }
    } else {
      hash.set(modValue, i);
    }
  }
  return false;
};

const res = checkSubarraySum([3, 2, 4], 6);
console.log("res: ", res);
