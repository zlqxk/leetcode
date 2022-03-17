/**
  给定一个未排序的整数数组 nums ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。

  请你设计并实现时间复杂度为 O(n) 的算法解决此问题。

  示例 1：

  输入：nums = [100,4,200,1,3,2]
  输出：4
  解释：最长数字连续序列是 [1, 2, 3, 4]。它的长度为 4。
  示例 2：

  输入：nums = [0,3,7,2,5,8,4,6,0,1]
  输出：9

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/longest-consecutive-sequence
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  let hashMap = new Map();
  let ans = 0;
  for (let i = 0; i < nums.length; i++) {
    hashMap.set(nums[i], i);
  }
  for (let i = 0; i < nums.length; i++) {
    let nextAns = 1;
    let next = nums[i];
    if (!hashMap.has(next - 1)) {
      while (true) {
        next += 1;
        if (!hashMap.has(next)) {
          break;
        }
        nextAns += 1;
      }
    }
    ans = Math.max(ans, nextAns);
  }
  return ans;
};

// const res = longestConsecutive([-1, 0]);
// const res = longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]);
// const res = longestConsecutive([100, 101, 4, 200, 1, 3, 2]);
const res = longestConsecutive([
  -7, -1, 3, -9, -4, 7, -3, 2, 4, 9, 4, -9, 8, -7, 5, -1, -7,
]);
console.log("res: ", res);
