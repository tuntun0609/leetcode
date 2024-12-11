/*
 * @lc app=leetcode.cn id=2717 lang=typescript
 * @lcpr version=30204
 *
 * [2717] 半有序排列
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function semiOrderedPermutation(nums: number[]): number {
  const oneIndex = nums.indexOf(1)
  const nIndex = nums.indexOf(nums.length)
  return oneIndex + nums.length - 1 - nIndex - (oneIndex > nIndex ? 1 : 0)
}
// @lc code=end

/*
// @lcpr case=start
// [2,1,4,3]\n
// @lcpr case=end

// @lcpr case=start
// [2,4,1,3]\n
// @lcpr case=end

// @lcpr case=start
// [1,3,4,2,5]\n
// @lcpr case=end

 */
