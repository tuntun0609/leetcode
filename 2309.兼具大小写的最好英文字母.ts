/*
 * @lc app=leetcode.cn id=2309 lang=typescript
 * @lcpr version=30204
 *
 * [2309] 兼具大小写的最好英文字母
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function greatestLetter(s: string): string {
  const ht = new Set<string>()
  for (const c of s) {
    ht.add(c)
  }
  for (let i = 25; i >= 0; i--) {
    if (
      ht.has(String.fromCharCode('a'.charCodeAt(0) + i)) &&
      ht.has(String.fromCharCode('A'.charCodeAt(0) + i))
    ) {
      return String.fromCharCode('A'.charCodeAt(0) + i)
    }
  }
  return ''
}
// @lc code=end

/*
// @lcpr case=start
// "lEeTcOdE"\n
// @lcpr case=end

// @lcpr case=start
// "arRAzFif"\n
// @lcpr case=end

// @lcpr case=start
// "AbCdEfGhIjK"\n
// @lcpr case=end

 */
