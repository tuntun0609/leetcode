/*
 * @lc app=leetcode.cn id=1758 lang=typescript
 * @lcpr version=30204
 *
 * [1758] 生成交替二进制字符串的最少操作数
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function minOperations(s: string): number {
  let count1 = 0
  // 统计 0 开头的需要替换的次数
  s.split('').forEach((char, index) => {
    if (char !== (index % 2 === 0 ? '0' : '1')) {
      count1++
    }
  })
  return Math.min(count1, s.length - count1)
}
// @lc code=end

/*
// @lcpr case=start
// "0100"\n
// @lcpr case=end

// @lcpr case=start
// "10"\n
// @lcpr case=end

// @lcpr case=start
// "1111"\n
// @lcpr case=end

 */
