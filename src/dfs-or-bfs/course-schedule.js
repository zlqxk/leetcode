/**
  你这个学期必须选修 numCourses 门课程，记为 0 到 numCourses - 1 。

  在选修某些课程之前需要一些先修课程。 先修课程按数组 prerequisites 给出，其中 prerequisites[i] = [ai, bi] ，表示如果要学习课程 ai 则 必须 先学习课程  bi 。

  例如，先修课程对 [0, 1] 表示：想要学习课程 0 ，你需要先完成课程 1 。
  请你判断是否可能完成所有课程的学习？如果可以，返回 true ；否则，返回 false 。

   

  示例 1：

  输入：numCourses = 2, prerequisites = [[1,0]]
  输出：true
  解释：总共有 2 门课程。学习课程 1 之前，你需要完成课程 0 。这是可能的。
  示例 2：

  输入：numCourses = 2, prerequisites = [[1,0],[0,1]]
  输出：false
  解释：总共有 2 门课程。学习课程 1 之前，你需要先完成​课程 0 ；并且学习课程 0 之前，你还应先完成课程 1 。这是不可能的。

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/course-schedule
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  let hashMap = new Map();
  let inList = new Array(numCourses).fill(0);
  let queue = [];
  let ans = 0;
  for (let i = 0; i < prerequisites.length; i++) {
    const item = prerequisites[i];
    inList[item[0]] += 1;
    if (hashMap.has(item[1])) {
      hashMap.set(item[1], [...hashMap.get(item[1]), item[0]]);
    } else {
      hashMap.set(item[1], [item[0]]);
    }
  }

  for (let i = 0; i < inList.length; i++) {
    if (inList[i] === 0) queue.push(i);
  }

  while (queue.length) {
    ans += 1;
    const _shift = queue.shift();
    const valueList = hashMap.get(_shift);
    if (!valueList) continue;
    for (let i = 0; i < valueList.length; i++) {
      inList[valueList[i]] -= 1;
      if (inList[valueList[i]] === 0) queue.push(valueList[i]);
    }
  }

  return ans === numCourses;
};

const res = canFinish(2, [
  [1, 0],
  [0, 1],
]);
