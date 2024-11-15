/*
 * @lc app=leetcode.cn id=1547 lang=typescript
 * @lcpr version=30204
 *
 * [1547] 切棍子的最小成本
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function minCost(n: number, cuts: number[]): number {
  cuts.push(0)
  cuts.push(n)
  cuts.sort((a, b) => a - b)
  const m = cuts.length
  const f: number[][] = Array.from({ length: m }, () => Array(m).fill(0))

  for (let i = m - 3; i >= 0; i--) {
    for (let j = i + 2; j < m; j++) {
      let minCost = Infinity
      for (let k = i + 1; k < j; k++) {
        minCost = Math.min(minCost, f[i][k] + f[k][j])
      }
      f[i][j] = minCost + (cuts[j] - cuts[i])
    }
  }

  return f[0][m - 1]
}
// @lc code=end

/*
// @lcpr case=start
// 7\n[1,3,4,5]\n
// @lcpr case=end

// @lcpr case=start
// 9\n[5,6,1,4,2]\n
// @lcpr case=end

 */
