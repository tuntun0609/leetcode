/*
 * @lc app=leetcode.cn id=5 lang=typescript
 * @lcpr version=30204
 *
 * [5] 最长回文子串
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function longestPalindrome(s: string): string {
  let max: number = 0 // 当前最大回文串的长度
  let start: number = -1 // 当前最大回文串的起始索引
  const len: number = s.length // s 的长度
  for (let i: number = 0; i < len; i++) {
    // 遍历 s
    let now: number = 1 // 当前回文串的长度
    let l: number = i - 1 // 左侧开始遍历的指针
    while (s[i + 1] === s[i]) {
      // 如果当前字符后边的字符都一样, 当前长度 + 1,  s遍历指针向后推
      now++
      i++
    }
    let r: number = i + 1 // 获取右侧开始遍历的指针
    while (s[l] === s[r] && s[l] !== undefined) {
      // 从连续字符两端开始像两侧扩展,直到越界或者不一致,一致的直接累积到当前长度中,修改左右指针
      now += 2
      l--
      r++
    }
    if (now > max) {
      // 判断与之前最大的对比,更新当前最大回文串的起始索引
      max = now
      start = l + 1
    }
  }
  return s.slice(start, start + max) // 通过最大长度和起始索引,获取需要的字符串
}
// @lc code=end

/*
// @lcpr case=start
// "babad"\n
// @lcpr case=end

// @lcpr case=start
// "cbbd"\n
// @lcpr case=end

 */
