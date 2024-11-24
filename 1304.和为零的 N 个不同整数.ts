/*
 * @lc app=leetcode.cn id=1304 lang=typescript
 * @lcpr version=30204
 *
 * [1304] 和为零的 N 个不同整数
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function sumZero(n: number): number[] {
  const symmetry = Math.floor(n / 2)
  const res = []
  for (let i = 1; i <= symmetry; i++) {
    res.push(i, -i)
  }
  if (n % 2 !== 0) {
    res.push(0)
  }
  return res
}
// @lc code=end

/*
// @lcpr case=start
// 5\n
// @lcpr case=end

// @lcpr case=start
// 3\n
// @lcpr case=end

// @lcpr case=start
// 1\n
// @lcpr case=end

 */
