/*
 * @lc app=leetcode.cn id=3258 lang=typescript
 * @lcpr version=30204
 *
 * [3258] 统计满足 K 约束的子字符串数量 I
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function countKConstraintSubstrings(s: string, k: number): number {
  let res = 0
  for (let i = 0; i < s.length; i++) {
    let oneNum = 0
    let zeroNum = 0
    for (let j = i; j < s.length; j++) {
      const item = s[j]
      if (item === '0') {
        zeroNum++
      } else {
        oneNum++
      }

      if (oneNum > k && zeroNum > k) {
        break
      }

      res++
    }
  }

  return res
}
// @lc code=end

/*
// @lcpr case=start
// "10101"\n1\n
// @lcpr case=end

// @lcpr case=start
// "1010101"\n2\n
// @lcpr case=end

// @lcpr case=start
// "11111"\n1\n
// @lcpr case=end

 */
