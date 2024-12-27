/*
 * @lc app=leetcode.cn id=3159 lang=typescript
 * @lcpr version=30204
 *
 * [3159] 查询数组中元素的出现位置
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function occurrencesOfElement(
  nums: number[],
  queries: number[],
  x: number
): number[] {
  let xNum = 1
  const positionMap = new Map<number, number>()
  nums.forEach((num, index) => {
    if (num === x) {
      positionMap.set(xNum, index)
      xNum++
    }
  })

  return queries.map((query) => {
    if (query >= xNum) {
      return -1
    }
    return positionMap.get(query)!
  })
}
// @lc code=end

/*
// @lcpr case=start
// [1,3,1,7]\n[1,3,2,4]\n1\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3]\n[10]\n5\n
// @lcpr case=end

 */
