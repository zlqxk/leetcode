/**
  207. 课程表
  你这个学期必须选修 numCourses 门课程，记为 0 到 numCourses - 1 。

  在选修某些课程之前需要一些先修课程。 先修课程按数组 prerequisites 给出，其中 prerequisites[i] = [ai, bi] ，表示如果要学习课程 ai 则 必须 先学习课程  bi 。

  例如，先修课程对 [0, 1] 表示：想要学习课程 0 ，你需要先完成课程 1 。
  请你判断是否可能完成所有课程的学习？如果可以，返回 true ；否则，返回 false 。

  示例 1：

  输入：numCourses = 2, prerequisites = [[1,0]]
  输出：true
  解释：总共有 2 门课程。学习课程 1 之前，你需要完成课程 0 。这是可能的。
  示例 2：

  输入：numCourses = 2, prerequisites = [[1,0],[0,1]]
  输出：false
  解释：总共有 2 门课程。学习课程 1 之前，你需要先完成​课程 0 ；并且学习课程 0 之前，你还应先完成课程 1 。这是不可能的。
 */

/**
 * 本质上就是图，每个节点都有入度和出度
 * 没有入度说明没有前置课程，可以直接学习
 * 学完了以后找到依赖这个课程的课程，将其入度减一
 * 需要一个Map存储关系；课程 -> 学会这个课程可以学的
 * 需要一个数组存储：下标（课程）-> 入度
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  let list = new Array(numCourses).fill(0);
  let hashMap = new Map();
  let ans = 0;

  prerequisites.forEach(([requisites, depRequisites]) => {
    list[requisites]++;
    if (hashMap.has(depRequisites)) {
      hashMap.get(depRequisites).push(requisites);
    } else {
      hashMap.set(depRequisites, [requisites]);
    }
  });

  function dfs(list) {
    let flag = false
    for (let i = 0; i < list.length; i++) {
      if (list[i] === 0) {
        flag = true
        ans++;
        const all = hashMap.get(i);
        if (all) {
          all.forEach((item) => (list[item] -= 1));
        }
        list[i] = -1;
      }
    }
    flag && dfs(list);
  }

  dfs(list);

  // console.log(hashMap);
  // console.log(list);
  // console.log(ans);
  return ans === numCourses;
};

const res = canFinish(2, [
  [1, 0],
  [0, 1],
]);
console.log(res);
