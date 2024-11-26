/*
 * @lc app=leetcode.cn id=3206 lang=typescript
 * @lcpr version=30204
 *
 * [3206] 交替组 I
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function numberOfAlternatingGroups(colors: number[]): number {
  let result = 0
  for (let i = 0; i < colors.length; i++) {
    const item = colors[i]
    const leftItem = i === 0 ? colors[colors.length - 1] : colors[i - 1]
    const rightItem = i === colors.length - 1 ? colors[0] : colors[i + 1]
    if (leftItem === rightItem && item !== leftItem) {
      result++
    }
  }
  return result
}
// @lc code=end

/*
// @lcpr case=start
// [1,1,1]\n
// @lcpr case=end

// @lcpr case=start
// [0,1,0,0,1]\n
// @lcpr case=end

 */
