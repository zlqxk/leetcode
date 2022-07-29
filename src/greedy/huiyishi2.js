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
 * 所需会议室的最小数量 -》同一时刻的最多会议
 * 投影
 * 每次到一个start 会议数量 + 1
 * 每到一个end，会议数量 - 1 
 * 遍历完所有会议看会议数量的最大值
 * 需要两个数组
 * startList 是开始时间的排序
 * endList 是结束时间的排序
 * startList
 * 遍历
 * count++
 * startList[i] > endList[j]
 * count--
 * j++
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
