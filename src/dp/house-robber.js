/**
  198. 打家劫舍
  你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。

  给定一个代表每个房屋存放金额的非负整数数组，计算你 不触动警报装置的情况下 ，一夜之内能够偷窃到的最高金额。
  
  示例 1：

  输入：[1,2,3,1]
  输出：4
  解释：偷窃 1 号房屋 (金额 = 1) ，然后偷窃 3 号房屋 (金额 = 3)。
      偷窃到的最高金额 = 1 + 3 = 4 。
  示例 2：

  输入：[2,7,9,3,1]
  输出：12
  解释：偷窃 1 号房屋 (金额 = 2), 偷窃 3 号房屋 (金额 = 9)，接着偷窃 5 号房屋 (金额 = 1)。
      偷窃到的最高金额 = 2 + 9 + 1 = 12 。
 */

/**
 * @param {number[]} nums
 * @return {number}
 * 最值问题，考虑使用动态规划
 * 当前所能偷的最大金额等于紧邻的最大金额 （因为紧邻着所以不能偷这家了，所以最大金额就是上一家）
 * 和紧邻的前一家的最大金额加上自身
 * dp[0] = nums[0]
 * dp[1] = Max(nums[0],num[1])
 * dp[i] = Max(dp[i - 1], dp[i - 2] + num[i])
 */
var rob = function (nums) {
  if (nums.length === 1) return nums[0];
  const max = Math.max(nums[0], nums[1]);

  let dp = [nums[0], max];
  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
  }
  // 此处还可以只用两个值来代替dpList
  return dp[nums.length - 1];
};

// const res = rob([1, 2, 3, 1]);
const res = rob([2, 7]);
// const res = rob([1, 2, 3, 1]);

console.log("res: ", res);
