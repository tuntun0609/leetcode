/*
 * @lc app=leetcode.cn id=825 lang=typescript
 * @lcpr version=30204
 *
 * [825] 适龄的朋友
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function numFriendRequests(ages: number[]): number {
  const n = ages.length
  ages.sort((a, b) => a - b)
  let left = 0,
    right = 0,
    ans = 0
  for (const age of ages) {
    if (age < 15) {
      continue
    }
    while (ages[left] <= 0.5 * age + 7) {
      ++left
    }
    while (right + 1 < n && ages[right + 1] <= age) {
      ++right
    }
    ans += right - left
  }
  return ans
}
// @lc code=end

/*
// @lcpr case=start
// [16,16]\n
// @lcpr case=end

// @lcpr case=start
// [16,17,18]\n
// @lcpr case=end

// @lcpr case=start
// [20,30,100,110,120]\n
// @lcpr case=end

 */
