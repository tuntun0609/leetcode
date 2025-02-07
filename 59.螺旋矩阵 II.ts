/*
 * @lc app=leetcode.cn id=59 lang=typescript
 * @lcpr version=30204
 *
 * [59] 螺旋矩阵 II
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function generateMatrix(n: number): number[][] {
  const matrix: number[][] = new Array(n)
    .fill(0)
    .map(() => new Array(n).fill(0))
  let num = 1
  let row = 0,
    col = 0
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ]
  let directionIndex = 0
  while (num <= n * n) {
    matrix[row][col] = num
    num++
    const nextRow = row + directions[directionIndex][0]
    const nextCol = col + directions[directionIndex][1]
    if (
      nextRow < 0 ||
      nextRow >= n ||
      nextCol < 0 ||
      nextCol >= n ||
      matrix[nextRow][nextCol] !== 0
    ) {
      directionIndex = (directionIndex + 1) % 4
    }
    row += directions[directionIndex][0]
    col += directions[directionIndex][1]
  }
  return matrix
}
// @lc code=end

/*
// @lcpr case=start
// 3\n
// @lcpr case=end

// @lcpr case=start
// 1\n
// @lcpr case=end

 */
