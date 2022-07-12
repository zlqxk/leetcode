/**
  给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。

  注意：答案中不可以包含重复的三元组。

  示例 1：

  输入：nums = [-1,0,1,2,-1,-4]
  输出：[[-1,-1,2],[-1,0,1]]
  示例 2：

  输入：nums = []
  输出：[]
  示例 3：

  输入：nums = [0]
  输出：[]

  来源：力扣（LeetCode）
  链接：https://leetcode.cn/problems/3sum
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 * 暴力解遍历三遍然后去重
 * 三个数加起来等于0，则一定满足 a <= b <= c 这个关系，所以现将数组排序，然后从头开始遍历，遍历的过程中使用两个指针 i + 1 和 n来确定另外两个数字
 * nums[i] + nums[i + 1] + nums[n] > 0；则 n - 1
 * nums[i] + nums[i + 1] + nums[n] < 0；则 i + 1 再 + 1
 * nums[i] + nums[i + 1] + nums[n] = 0；则 i + 1 + 1 并且 n - 1，然后继续寻找其他解，这个过程中要过滤掉重复的数
 */
var threeSum = function (nums) {
  let res = [];
  let prev = null;
  nums.sort((a, b) => a - b);
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    let left = i + 1;
    let right = n - 1;
    if (nums[i] === prev) continue;
    prev = nums[i];
    while (right > left) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum > 0) {
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        res.push([nums[i], nums[left], nums[right]]);
        while (right > left && nums[left] === nums[left + 1]) {
          left++;
        }
        while (right > left && nums[right] === nums[right - 1]) {
          right--;
        }
        left++;
        right--;
      }
    }
  }
  return res;
};

const res = threeSum([0, 0, 0, 0]);
console.log("res: ", res);
