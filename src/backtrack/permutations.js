/**
 * 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/permutations/
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 *
 * 输入：nums = [1,2,3]
 * 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let res = [];

  function backtrack(arr, itemList) {
    if (!arr.length) {
      res.push(itemList.slice());
      return;
    }
    for (let i = 0; i < arr.length; i++) {
      itemList.push(arr[i]);
      const _arr = arr.slice();
      _arr.splice(i, 1);
      backtrack(_arr, itemList);
      itemList.pop();
    }
  }
  backtrack(nums, []);
  return res;
};

const res = permute([1, 2, 3]);
console.log("res: ", res);
