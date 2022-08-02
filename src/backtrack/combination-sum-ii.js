/**
  40. 组合总和 II
  给定一个候选人编号的集合 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。

  candidates 中的每个数字在每个组合中只能使用 一次 。

  注意：解集不能包含重复的组合。 

  示例 1:

  输入: candidates = [10,1,2,7,6,1,5], target = 8,
  输出:
  [
  [1,1,6],
  [1,2,5],
  [1,7],
  [2,6]
  ]
  示例 2:

  输入: candidates = [2,5,2,1,2], target = 5,
  输出:
  [
  [1,2,2],
  [5]
  ]
 */

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  const result = [];
  const visited = [];

  function backtrack(combine, index, target) {
    if (target === 0) {
      result.push(combine.slice());
      return;
    }

    if (target < 0) {
      return;
    }

    for (let i = index; i < candidates.length; i++) {
      if (i > 0 && candidates[i] === candidates[i - 1] && !visited[i - 1])
        continue;
      visited[i] = true;
      combine.push(candidates[i]);
      target = target - candidates[i];
      backtrack(combine, i + 1, target);
      visited[i] = false;
      combine.pop();
      target = target + candidates[i];
    }
  }

  candidates.sort((a, b) => a - b);

  backtrack([], 0, target);

  return result;
};

const res = combinationSum2([2, 5, 2, 1, 2], 5);
console.log("res: ", res);
