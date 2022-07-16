/**
  题目：会议室1
  
  描述
  给定一系列的会议时间间隔，包括起始和结束时间[[s1,e1]，[s2,e2]，…(si < ei)，确定一个人是否可以参加所有会议。

  (0,8),(8,10)在8这一时刻不冲突

  样例
  样例1

  输入: intervals = [(0,30),(5,10),(15,20)]
  输出: false
  解释:
  (0,30), (5,10) 和 (0,30),(15,20) 这两对会议会冲突
  样例2

  输入: intervals = [(5,8),(9,15)]
  输出: true
  解释:
  这两个时间段不会冲突
 */

/**
 * 还是区间问题，使用贪心
 * 一个人是否可以参加所有会议取决于区间有没有交集，而且是一重的交集即可，不像2里面要计算多重交集
 * 一重交集通过对end排序
 * 下一个的start大于end则没有交集
 * 更新end
 * @param {*} intervals
 */
var minMeetingRooms = function (intervals) {
  intervals.sort();
  if (intervals.length === 0) return true;
  let tmp = intervals[0][1];
  for (let i = 1; i < intervals.length; i++) {
    const start = intervals[i][0];
    if (start < tmp) {
      return false;
    } else {
      tmp = intervals[i][1];
    }
  }
  return true;
};

const res = minMeetingRooms([
  [465, 497],
  [386, 462],
  [354, 380],
  [134, 189],
  [199, 282],
  [18, 104],
  [499, 562],
  [4, 14],
  [111, 129],
  [292, 345],
]);

console.log(res);
