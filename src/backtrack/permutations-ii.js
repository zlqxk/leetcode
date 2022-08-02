/**
  47. 全排列 II
  给定一个可包含重复数字的序列 nums ，按任意顺序 返回所有不重复的全排列。

  示例 1：

  输入：nums = [1,1,1,1,2]
  输出：
  [[1,1,2],
  [1,2,1],
  [2,1,1]]
  示例 2：

  输入：nums = [1,2,3]
  输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 */

/**
 * 遍历数组，以数组每个元素为基点，递归调用，1 -> 1 -> 2、1 -> 2 -> 1
 * 使用过的数字不能继续使用，所以每使用一个都需要记录下来，下次遇到时跳过
 * 返回的序列不能重复，第一位不能选取和之前一样的，可以理解为组合前就去重
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  let result = [];

  /**
   * @param {*} visited 已经访问过的
   * @param {*} combine 组合好的数
   * @param {*} index 遍历的起点
   */
  function backtrack(visited, combine, index) {
    let curVisited = [];
    if (index === nums.length) {
      result.push(combine.slice());
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (visited[i] || (i > 0 && nums[i] === nums[i - 1] && !visited[i - 1])) {
        continue;
      }
      visited[i] = true;
      combine.push(nums[i]);
      backtrack(visited, combine, index + 1);
      visited[i] = false;
      combine.pop();
    }
  }
  nums.sort((x, y) => x - y);
  backtrack([], [], 0);

  return result;
};

const res = permuteUnique([3, 3, 0, 3]);
console.log("res: ", res);
