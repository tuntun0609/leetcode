/*
 * @lc app=leetcode.cn id=3375 lang=typescript
 * @lcpr version=30204
 *
 * [3375] 使数组的值全部为 K 的最少操作次数
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function minOperations(nums: number[], k: number): number {
  if (nums.some((num) => num < k)) {
    return -1
  }

  // 大于k的数
  const greaterThanK = nums.filter((num) => num > k)

  const numSet = new Set(greaterThanK)

  const size = numSet.size

  return size
}
// @lc code=end

/*
// @lcpr case=start
// [5,2,5,4,5]\n2\n
// @lcpr case=end

// @lcpr case=start
// [2,1,2]\n2\n
// @lcpr case=end

// @lcpr case=start
// [9,7,5,3]\n1\n
// @lcpr case=end

 */
