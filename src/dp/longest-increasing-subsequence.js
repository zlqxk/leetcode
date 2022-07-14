/**
  300. 最长递增子序列
  给你一个整数数组 nums ，找到其中最长严格递增子序列的长度。

  子序列 是由数组派生而来的序列，删除（或不删除）数组中的元素而不改变其余元素的顺序。例如，[3,6,2,7] 是数组 [0,3,1,6,2,2,7] 的子序列。

  
  示例 1：

  输入：nums = [10,11,9,5,8,7,101,18]
              [1 ,2 ,1,1,2,2,3  ,3]
  输出：4
  解释：最长递增子序列是 [2,3,7,101]，因此长度为 4 。
  示例 2：

  输入：nums = [0,1,0,3,2,3]
              [1,2,1,3]
  输出：4
  示例 3：

  输入：nums = [7,7,7,7,7,7,7]
  输出：1
 */

/**
 * @param {number[]} nums
 * @return {number}
 * 最值问题考虑动态规划
 * dp[0] = 1
 * dp[i] = Math.max(dp[j]) + 1
 * 当前位置的最长子序列等于之前的比他小的最长子序列+1
 */
var lengthOfLIS = function (nums) {
  let dp = [1];
  let res = 1;
  for (let i = 1; i < nums.length; i++) {
    let jMax = 0;
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        jMax = Math.max(jMax, dp[j]);
      }
    }
    dp[i] = jMax + 1;
    res = Math.max(res, jMax + 1);
  }
  console.log(dp);
  return res;
};

const res = lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]);
console.log("res: ", res);
