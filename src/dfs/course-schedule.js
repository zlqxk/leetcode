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
 * 依赖问题可以抽象成图的入度和出度
 * 使用一个map来存储 依赖课程 -> 完成这个依赖可以学习的课程
 * 使用一个数组list来存储课程的入度
 * 遍历list，如果入度为0则可以学习，将list[i] = -1
 * 并且在map中查询到对应的元素，将其value的入度都减一，并且从map中删掉
 * 继续遍历数组，直到数组中没有0
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
