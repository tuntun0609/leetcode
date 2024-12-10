/*
 * @lc app=leetcode.cn id=2574 lang=typescript
 * @lcpr version=30204
 *
 * [2574] 左右元素和的差值
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function leftRightDifference(nums: number[]): number[] {
  const result = []
  for (let i = 0; i < nums.length; i++) {
    result.push(
      Math.abs(
        nums.slice(0, i).reduce((a, b) => a + b, 0) -
          nums.slice(i + 1).reduce((a, b) => a + b, 0)
      )
    )
  }
  return result
}
// @lc code=end

/*
// @lcpr case=start
// [10,4,8,3]\n
// @lcpr case=end

// @lcpr case=start
// [1]\n
// @lcpr case=end

 */
