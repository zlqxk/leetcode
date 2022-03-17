/**
  
  给定一个 m x n 二维字符网格 board 和一个字符串单词 word 。如果 word 存在于网格中，返回 true ；否则，返回 false 。

  单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。

  示例 1：
  https://assets.leetcode.com/uploads/2020/11/04/word2.jpg

  输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
  输出：true

  示例 2：
  https://assets.leetcode.com/uploads/2020/11/04/word-1.jpg

  输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
  输出：true

  示例 3：
  https://assets.leetcode.com/uploads/2020/10/15/word3.jpg

  输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
  输出：false

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/word-search
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  for (let i = 0; i < board[0].length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      const res = check(board[i][j], word[0]);
      if (res) return true;
    }
  }

  function check(i_index, j_index, str) {
    for (let i = 0; i < curWord.length; i++) {
      check()
    }
  }

  return false;
};
