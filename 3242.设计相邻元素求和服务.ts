/*
 * @lc app=leetcode.cn id=3242 lang=typescript
 * @lcpr version=30204
 *
 * [3242] 设计相邻元素求和服务
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
class NeighborSum {
  private grid: number[][]
  private positions: { [key: string]: number[] }
  constructor(grid: number[][]) {
    this.grid = grid
    this.positions = {}

    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
        this.positions[grid[i][j]] = [i, j]
      }
    }
  }

  adjacentSum(value: number): number {
    const [x, y] = this.positions[value]
    let sum = 0
    if (x > 0) sum += this.grid[x - 1][y]
    if (x < this.grid.length - 1) sum += this.grid[x + 1][y]
    if (y > 0) sum += this.grid[x][y - 1]
    if (y < this.grid[x].length - 1) sum += this.grid[x][y + 1]
    return sum
  }

  diagonalSum(value: number): number {
    const [x, y] = this.positions[value]
    let sum = 0
    if (x > 0 && y > 0) sum += this.grid[x - 1][y - 1]
    if (x > 0 && y < this.grid[x].length - 1) sum += this.grid[x - 1][y + 1]
    if (x < this.grid.length - 1 && y > 0) sum += this.grid[x + 1][y - 1]
    if (x < this.grid.length - 1 && y < this.grid[x].length - 1)
      sum += this.grid[x + 1][y + 1]
    return sum
  }
}

/**
 * Your NeighborSum object will be instantiated and called as such:
 * var obj = new NeighborSum(grid)
 * var param_1 = obj.adjacentSum(value)
 * var param_2 = obj.diagonalSum(value)
 */
// @lc code=end

/*
// @lcpr case=start
// ["neighborSum", "adjacentSum", "adjacentSum", "diagonalSum", "diagonalSum"][[[[0, 1, 2], [3, 4, 5], [6, 7, 8]]], [1], [4], [4], [8]]\n
// @lcpr case=end

// @lcpr case=start
// ["neighborSum", "adjacentSum", "diagonalSum"][[[[1, 2, 0, 3], [4, 7, 15, 6], [8, 9, 10, 11], [12, 13, 14, 5]]], [15], [9]]\n
// @lcpr case=end

 */
