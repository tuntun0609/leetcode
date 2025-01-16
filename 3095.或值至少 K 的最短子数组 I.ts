/*
 * @lc app=leetcode.cn id=3095 lang=typescript
 * @lcpr version=30204
 *
 * [3095] 或值至少 K 的最短子数组 I
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function minimumSubarrayLength(nums: number[], k: number): number {
  const n = nums.length
  let res = Number.MAX_VALUE
  for (let i = 0; i < n; i++) {
    let value = 0
    for (let j = i; j < n; j++) {
      value |= nums[j]
      if (value >= k) {
        res = Math.min(res, j - i + 1)
        break
      }
    }
  }
  return res === Number.MAX_VALUE ? -1 : res
}
// @lc code=end

/*
// @lcpr case=start
// [1,2,3]\n2\n
// @lcpr case=end

// @lcpr case=start
// [2,1,8]\n10\n
// @lcpr case=end

// @lcpr case=start
// [1,2]\n0\n
// @lcpr case=end

 */
