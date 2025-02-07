/*
 * @lc app=leetcode.cn id=47 lang=typescript
 * @lcpr version=30204
 *
 * [47] 全排列 II
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function permuteUnique(nums: number[]): number[][] {
  const ans: number[][] = []
  const perm: number[] = []
  const vis: boolean[] = new Array(nums.length).fill(false)
  nums.sort((a, b) => a - b)
  function backtrack(idx: number) {
    if (idx === nums.length) {
      ans.push([...perm])
      return
    }
    for (let i = 0; i < nums.length; i++) {
      if (vis[i] || (i > 0 && nums[i] === nums[i - 1] && !vis[i - 1])) {
        continue
      }
      perm.push(nums[i])
      vis[i] = true
      backtrack(idx + 1)
      vis[i] = false
      perm.pop()
    }
  }
  backtrack(0)
  return ans
}
// @lc code=end

/*
// @lcpr case=start
// [1,1,2]\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3]\n
// @lcpr case=end

 */
