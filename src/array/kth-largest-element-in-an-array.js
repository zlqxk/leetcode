/**
  给定整数数组 nums 和整数 k，请返回数组中第 k 个最大的元素。

  请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。

  示例 1:

  输入: [3,2,1,5,6,4] 和 k = 2
  输出: 5
  示例 2:

  输入: [3,2,3,1,2,4,5,5,6] 和 k = 4
  输出: 4

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/kth-largest-element-in-an-array
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

// (5),4,2,3,1,7,(6)    5
// (5),4,2,3,1,(7),6    5
// (1),4,2,3,(5),7,6    5
// 1,(4),2,3,(5),7,6    5
// 1,4,(2),3,(5),7,6    5
// 1,4,2,(3),(5),7,6    5
// 1,4,2,(3),(5),7,6    5
// 1,4,2,3,((5)),7,6    5

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  function quickSort(left, right) {
    if (right < left) return;
    let _left = left;
    let _rigth = right;
    const temp = nums[left];
    while (_rigth > _left) {
      while (_rigth > _left) {
        if (nums[_rigth] > temp) {
          let cache = nums[_rigth];
          nums[_rigth] = nums[_left];
          nums[_left] = cache;
          break;
        } else {
          _rigth--;
        }
      }

      while (_rigth > _left) {
        if (nums[_left] < temp) {
          let cache = nums[_rigth];
          nums[_rigth] = nums[_left];
          nums[_left] = cache;
          break;
        } else {
          _left++;
        }
      }
    }
    if (_rigth < k - 1) {
      return quickSort(_rigth + 1, right);
    } else if (_rigth > k - 1) {
      return quickSort(left, _rigth - 1);
    } else {
      return nums[_rigth];
    }
  }

  return quickSort(0, nums.length - 1);
};

const res = findKthLargest([3, 2, 1, 5, 6, 4], 2);
console.log("res: ", res);
