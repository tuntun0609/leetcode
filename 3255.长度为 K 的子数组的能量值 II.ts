/*
 * @lc app=leetcode.cn id=3255 lang=typescript
 * @lcpr version=30204
 *
 * [3255] 长度为 K 的子数组的能量值 II
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function resultsArray(nums: number[], k: number): number[] {
  const numsLength = nums.length
  let cnt = 0
  const ans: number[] = Array(numsLength - k + 1).fill(-1)
  for (let i = 0; i < numsLength; i++) {
    cnt = i === 0 || nums[i] - nums[i - 1] !== 1 ? 1 : cnt + 1
    console.log(cnt)
    if (cnt >= k) {
      ans[i - k + 1] = nums[i]
    }
  }
  return ans
}
// @lc code=end

/*
// @lcpr case=start
// [1,2,3,4,3,2,5]\n3\n
// @lcpr case=end

// @lcpr case=start
// [2,2,2,2,2]\n4\n
// @lcpr case=end

// @lcpr case=start
// [3,2,3,2,3,2]\n2\n
// @lcpr case=end

 */
