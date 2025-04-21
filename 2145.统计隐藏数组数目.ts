/*
 * @lc app=leetcode.cn id=2145 lang=typescript
 * @lcpr version=30204
 *
 * [2145] 统计隐藏数组数目
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function numberOfArrays(
  differences: number[],
  lower: number,
  upper: number
): number {
  let x = 0,
    y = 0,
    cur = 0
  for (let d of differences) {
    cur += d
    x = Math.min(x, cur)
    y = Math.max(y, cur)
    if (y - x > upper - lower) {
      return 0
    }
  }
  return upper - lower - (y - x) + 1
}
// @lc code=end

/*
// @lcpr case=start
// [1,-3,4]\n1\n6\n
// @lcpr case=end

// @lcpr case=start
// [3,-4,5,1,-2]\n-4\n5\n
// @lcpr case=end

// @lcpr case=start
// [4,-7,2]\n3\n6\n
// @lcpr case=end

 */
