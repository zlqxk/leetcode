/**
  39. 组合总和
  给你一个 无重复元素 的整数数组 candidates 和一个目标整数 target ，找出 candidates 中可以使数字和为目标数 target 的 所有 不同组合 ，并以列表形式返回。你可以按 任意顺序 返回这些组合。

  candidates 中的 同一个 数字可以 无限制重复被选取 。如果至少一个数字的被选数量不同，则两种组合是不同的。 

  对于给定的输入，保证和为 target 的不同组合数少于 150 个。

  示例 1：

  输入：candidates = [2,3,6,7], target = 7
  输出：[[2,2,3],[7]]
  解释：
  2 和 3 可以形成一组候选，2 + 2 + 3 = 7 。注意 2 可以使用多次。
  7 也是一个候选， 7 = 7 。
  仅有这两种组合。
  示例 2：

  输入: candidates = [2,3,5], target = 8
  输出: [[2,2,2,2],[2,3,3],[3,5]]
  示例 3：

  输入: candidates = [2], target = 1
  输出: []
 */

/**
 * 从数组第一个元素开始递归
 * 递归的下一个数组是从当前元素位置开始，这样可以避免重复
 * 退出递归的条件为当前的和大于target或者等于target，等于的话记录下来
 * 每次执行完回溯
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  let res = [];

  function backtrack(target, combine, index) {
    if (target === 0) {
      res.push(combine.slice());
      return;
    }

    if (target < 0) {
      return;
    }

    for (let i = index; i < candidates.length; i++) {
      combine.push(candidates[i]);
      backtrack(target - candidates[i], combine, i);
      combine.pop();
    }
  }

  backtrack(target, [], 0);
  return res;
};

const res = combinationSum([2, 3, 6, 7], 7);
console.log("res: ", res);
