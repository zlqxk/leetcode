/**
  46. 全排列
  给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。

  示例 1：

  输入：nums = [1,2,3]
  输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
  示例 2：

  输入：nums = [0,1]
  输出：[[0,1],[1,0]]
  示例 3：

  输入：nums = [1]
  输出：[[1]]
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const res = [];
  function backtrack(combine, index, visited) {
    if (index === nums.length) {
      res.push(combine.slice());
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (visited[i] === 1) continue;
      visited[i] = 1;
      combine.push(nums[i]);
      backtrack(combine, index + 1, visited);
      visited[i] = 0;
      combine.pop();
    }
  }

  backtrack([], 0, []);
  return res;
};

const res = permute([1, 2, 3]);
console.log("res: ", res);
