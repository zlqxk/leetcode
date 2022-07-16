/**
  435. 无重叠区间
  给定一个区间的集合 intervals ，其中 intervals[i] = [starti, endi] 。返回 需要移除区间的最小数量，使剩余区间互不重叠 。

  示例 1:

  输入: intervals = [[1,2],[2,3],[3,4],[1,3]]
  输出: 1
  解释: 移除 [1,3] 后，剩下的区间没有重叠。
  示例 2:

  输入: intervals = [ [1,2], [1,2], [1,2] ]
  输出: 2
  解释: 你需要移除两个 [1,2] 来使剩下的区间没有重叠。
  示例 3:

  输入: intervals = [ [1,2], [2,3] ]
  输出: 0
  解释: 你不需要移除任何区间，因为它们已经是无重叠的了。
 */

/**
 * @param {number[][]} intervals
 * @return {number}
 * 区间问题考虑贪心
 * 贪心是动态规划的一种特殊情况，求总的最优解就是求解每一步的最优解
 * 将序列按照结束时间排序
 * 移除区间最小数量，就是选取一个区间，然后与每一个区间作对比，有重叠的就去除，一直选到第一个不与他重叠的区间，然后用新的区间继续作对比
 */
var eraseOverlapIntervals = function (intervals) {
  let ans = 0;
  intervals.sort((a, b) => a[1] - b[1]);
  let temp = intervals[0][1];
  for (let i = 1; i < intervals.length; i++) {
    const start = intervals[i][0];
    if (start >= temp) {
      temp = intervals[i][1];
    } else {
      ans++;
      intervals[i] = undefined;
    }
  }
  return ans;
};

const res = eraseOverlapIntervals([
  [1, 2],
  [1, 2],
  [1, 2],
]);

console.log(res);
