/*
 * @lc app=leetcode.cn id=1281 lang=typescript
 * @lcpr version=30204
 *
 * [1281] 整数的各位积和之差
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function subtractProductAndSum(n: number): number {
  const numArr = n.toString().split('').map(Number)
  const product = numArr.reduce((acc, num) => acc * num, 1)
  const sum = numArr.reduce((acc, num) => acc + num, 0)
  return product - sum
}
// @lc code=end

/*
// @lcpr case=start
// 234\n
// @lcpr case=end

// @lcpr case=start
// 4421\n
// @lcpr case=end

 */
