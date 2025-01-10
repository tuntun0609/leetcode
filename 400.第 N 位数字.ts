/*
 * @lc app=leetcode.cn id=400 lang=typescript
 * @lcpr version=30204
 *
 * [400] 第 N 位数字
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function findNthDigit(n: number): number {
  // 处理特殊情况
  if (n < 10) return n

  // 当前位数
  let digit = 1
  // 当前位数的起始数字
  let start = 1
  // 当前位数包含的所有数字个数
  let count = 9

  // 找到n所在的数字位数
  while (n > digit * count) {
    n -= digit * count
    digit++
    start *= 10
    count *= 10
  }

  // 确定具体的数字
  start = start + Math.floor((n - 1) / digit)

  // 确定是这个数字的第几位
  let s = start.toString()
  return parseInt(s[(n - 1) % digit])
}
// @lc code=end

/*
// @lcpr case=start
// 3\n
// @lcpr case=end

// @lcpr case=start
// 11\n
// @lcpr case=end

 */
