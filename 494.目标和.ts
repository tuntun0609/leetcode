/*
 * @lc app=leetcode.cn id=494 lang=typescript
 * @lcpr version=30204
 *
 * [494] 目标和
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function findTargetSumWays(nums: number[], target: number): number {
  let result = 0

  const dfs = (index: number, sum: number) => {
    if (index === nums.length) {
      if (sum === target) {
        result++
      }
      return
    }

    dfs(index + 1, sum + nums[index])
    dfs(index + 1, sum - nums[index])
  }

  dfs(0, 0)

  return result
}
// @lc code=end

/*
// @lcpr case=start
// [1,1,1,1,1]\n3\n
// @lcpr case=end

// @lcpr case=start
// [1]\n1\n
// @lcpr case=end

 */
