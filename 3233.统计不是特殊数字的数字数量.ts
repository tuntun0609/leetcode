/*
 * @lc app=leetcode.cn id=3233 lang=typescript
 * @lcpr version=30204
 *
 * [3233] 统计不是特殊数字的数字数量
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function nonSpecialCount(l: number, r: number): number {
  const n = Math.floor(Math.sqrt(r))
  const v = new Array(n + 1).fill(0)
  let res = r - l + 1
  for (let i = 2; i <= n; i++) {
    if (v[i] === 0) {
      if (i * i >= l && i * i <= r) {
        res--
      }
      for (let j = i * 2; j <= n; j += i) {
        v[j] = 1
      }
    }
  }
  return res
}
// @lc code=end

/*
// @lcpr case=start
// 5\n7\n
// @lcpr case=end

// @lcpr case=start
// 4\n16\n
// @lcpr case=end

 */
