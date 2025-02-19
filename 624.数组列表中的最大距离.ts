/*
 * @lc app=leetcode.cn id=624 lang=typescript
 * @lcpr version=30204
 *
 * [624] 数组列表中的最大距离
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function maxDistance(arrays: number[][]): number {
  let res = 0
  let n = arrays[0].length
  let minVal = arrays[0][0]
  let maxVal = arrays[0][n - 1]

  for (let i = 1; i < arrays.length; i++) {
    n = arrays[i].length
    res = Math.max(
      res,
      Math.max(
        Math.abs(arrays[i][n - 1] - minVal),
        Math.abs(maxVal - arrays[i][0])
      )
    )
    minVal = Math.min(minVal, arrays[i][0])
    maxVal = Math.max(maxVal, arrays[i][n - 1])
  }
  return res
}
// @lc code=end

/*
// @lcpr case=start
// [[1,2,3],[4,5],[1,2,3]]\n
// @lcpr case=end

// @lcpr case=start
// [[1],[1]]\n
// @lcpr case=end

 */
