/*
 * @lc app=leetcode.cn id=3208 lang=typescript
 * @lcpr version=30204
 *
 * [3208] 交替组 II
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function numberOfAlternatingGroups(colors: number[], k: number): number {
  let index = 1
  let result = 0
  for (let i = -k + 2; i < colors.length; i++) {
    if (
      colors[(i + colors.length) % colors.length] !==
      colors[(i - 1 + colors.length) % colors.length]
    ) {
      index++
    } else {
      index = 1
    }
    if (index >= k) {
      result++
    }
  }
  return result
}
// @lc code=end

/*
// @lcpr case=start
// [0,1,0,1,0]\n3\n
// @lcpr case=end

// @lcpr case=start
// [0,1,0,0,1,0,1]\n6\n
// @lcpr case=end

// @lcpr case=start
// [1,1,0,1]\n4\n
// @lcpr case=end

 */
