/*
 * @lc app=leetcode.cn id=38 lang=typescript
 * @lcpr version=30204
 *
 * [38] 外观数列
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function countAndSay(n: number): string {
  const getCountAndSay = (str: string) => {
    let curNum = null
    let curCount = 0
    const result = []
    for (let i = 0; i < str.length; i++) {
      if (curNum === null) {
        curNum = str[i]
        curCount = 1
      } else if (curNum === str[i]) {
        curCount++
      } else {
        result.push(`${curCount}${curNum}`)
        curNum = str[i]
        curCount = 1
      }
    }
    result.push(`${curCount}${curNum}`)

    return result.join('')
  }

  let result = '1'
  for (let i = 1; i < n; i++) {
    result = getCountAndSay(result)
  }
  return result
}
// @lc code=end

/*
// @lcpr case=start
// 4\n
// @lcpr case=end

// @lcpr case=start
// 1\n
// @lcpr case=end

 */
