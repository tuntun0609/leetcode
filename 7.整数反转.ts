/*
 * @lc app=leetcode.cn id=7 lang=typescript
 * @lcpr version=30204
 *
 * [7] 整数反转
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function reverse(x: number): number {
  const str = x.toString()
  let result = null
  if (str[0] === '-') {
    result = Number(`-${str.slice(1).split('').reverse().join('')}`)
  } else {
    result = Number(str.split('').reverse().join(''))
  }
  if (Math.abs(result) > Math.pow(2, 31) - 1) {
    return 0
  }
  return result
}
// @lc code=end

/*
// @lcpr case=start
// 123\n
// @lcpr case=end

// @lcpr case=start
// -123\n
// @lcpr case=end

// @lcpr case=start
// 120\n
// @lcpr case=end

// @lcpr case=start
// 0\n
// @lcpr case=end

 */
