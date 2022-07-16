/**
  42. 接雨水
  给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。


  示例 1：

s
  输入：height = [0,1,0,2,1,0,1,3,2,1,2,1]
  输出：6
  解释：上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。 
  示例 2：

  输入：height = [4,2,0,3,2,5]
  输出：9
 */

/**
 * @param {number[]} height
 * @return {number}
 * 当前位置所能接的雨水的最大值由当前位置左边柱子和右边柱子的最小值决定，所以当前位置所能接的雨水是
 * Min(height[left], height[right]) - height[i]
 * 而核心就是找到最高的那根柱子
 * 柱子左边的雨水的最大高度由左侧的最大值
 * 柱子右边的雨水的最大高度由右侧的最大值
 * 所以从头尾向中间遍历，哪边小就往另一边移动，因为最高的一定在另一边了
 */
var trap = function (height) {
  let ans = 0;
  let left = 0;
  let right = height.length - 1;
  let maxLeft = 0;
  let maxRight = 0;
  while (right > left) {
    maxLeft = Math.max(maxLeft, height[left]);
    maxRight = Math.max(maxRight, height[right]);
    if (maxRight >= maxLeft) {
      ans += maxLeft - height[left];
      left++;
    } else {
      ans += maxRight - height[right];
      right--;
    }
  }
  return ans;
};

const res = trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]);
console.log("res: ", res);
