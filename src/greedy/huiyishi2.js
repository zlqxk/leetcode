/**
 * 919 · 会议室 II

给定一系列的会议时间间隔intervals，包括起始和结束时间[[s1,e1],[s2,e2],...] (si < ei)，找到所需的最小的会议室数量。


(0,8),(8,10)在8这一时刻不冲突

样例
样例1

输入: intervals = [(0,30),(5,10),(15,20)]
输出: 2
解释:
需要两个会议室
会议室1:(0,30)
会议室2:(5,10),(15,20)
样例2

输入: intervals = [(2,7)]
输出: 1
解释:
只需要1个会议室就够了
 */

/**
 * 区间问题，考虑使用贪心
 * 最多需要几个会议室 -》同一时刻最多有几个会议同时进行
 * 遇到开始时间加1，遇到结束时间减1
 * 将开始时间收集到一个数组排序
 * 将结束时间收集到一个数组排序
 * 遍历开始时间，每次遍历都与当前记录的结束时间做对比，小于则计数并且继续遍历
 * 大于说明越过结束时间了，将结束时间向下移动，并减数
 * @param {*} intervals
 */
var minMeetingRooms = function (intervals) {
  let startList = intervals.map((item) => item[0]).sort((a, b) => a - b);
  let endList = intervals.map((item) => item[1]).sort((a, b) => a - b);

  let i = 0;
  let j = 0;
  let ans = 0;
  let count = 0;
  while (i <= startList.length && j <= startList.length) {
    if (startList[i] < endList[j]) {
      count++;
      ans = Math.max(ans, count);
      i++;
    } else {
      count--;
      j++;
    }
  }
  return ans;
};

const res = minMeetingRooms([
  [0, 30],
  [5, 10],
  [15, 20],
]);

console.log(res);
