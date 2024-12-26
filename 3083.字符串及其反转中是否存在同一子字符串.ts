/*
 * @lc app=leetcode.cn id=3083 lang=typescript
 * @lcpr version=30204
 *
 * [3083] 字符串及其反转中是否存在同一子字符串
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function isSubstringPresent(s: string): boolean {
  for (let i = 0; i < s.length - 1; i++) {
    const subStr = s[i + 1] + s[i]
    if (s.includes(subStr)) {
      return true
    }
  }
  return false
}
// @lc code=end

/*
// @lcpr case=start
// "leetcode"\n
// @lcpr case=end

// @lcpr case=start
// "abcba"\n
// @lcpr case=end

// @lcpr case=start
// "abcd"\n
// @lcpr case=end

 */
