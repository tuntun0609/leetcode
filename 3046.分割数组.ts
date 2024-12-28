/*
 * @lc app=leetcode.cn id=3046 lang=typescript
 * @lcpr version=30204
 *
 * [3046] 分割数组
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function isPossibleToSplit(nums: number[]): boolean {
  const numMap = new Map<number, number>()
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i]
    numMap.set(element, (numMap.get(element) || 0) + 1)

    if (numMap.get(element)! > 2) {
      return false
    }
  }

  return true
}
// @lc code=end

/*
// @lcpr case=start
// [1,1,2,2,3,4]\n
// @lcpr case=end

// @lcpr case=start
// [1,1,1,1]\n
// @lcpr case=end

 */
