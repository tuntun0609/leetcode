/*
 * @lc app=leetcode.cn id=3280 lang=typescript
 * @lcpr version=30204
 *
 * [3280] 将日期转换为二进制表示
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function convertDateToBinary(date: string): string {
  const [year, month, day] = date.split('-')
  return `${binary(parseInt(year, 10))}-${binary(parseInt(month, 10))}-${binary(
    parseInt(day, 10)
  )}`
}

function binary(x: number): string {
  let s = ''
  while (x !== 0) {
    s += x & 1
    x >>= 1
  }
  return s.split('').reverse().join('')
}
// @lc code=end

/*
// @lcpr case=start
// "2080-02-29"\n
// @lcpr case=end

// @lcpr case=start
// "1900-01-01"\n
// @lcpr case=end

 */
