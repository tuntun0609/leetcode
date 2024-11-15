/*
 * @lc app=leetcode.cn id=3254 lang=typescript
 * @lcpr version=30204
 *
 * [3254] 长度为 K 的子数组的能量值 I
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function resultsArray(nums: number[], k: number): number[] {
  const splitArray: number[][] = []
  for (let i = 0; i < nums.length - k + 1; i++) {
    splitArray.push(nums.slice(i, i + k))
  }
  const result: number[] = []
  splitArray.forEach((item) => {
    let isAllUp = true
    // 是否连续上升
    for (let i = 0; i < item.length - 1; i++) {
      const currentNum = item[i]
      const nextNum = item[i + 1]
      if (nextNum !== currentNum + 1) {
        isAllUp = false
        break
      }
    }
    if (isAllUp) {
      result.push(item[item.length - 1])
    } else {
      result.push(-1)
    }
  })

  return result
}
// @lc code=end

/*
// @lcpr case=start
// [1,2,3,4,3,2,5]\n3\n
// @lcpr case=end

// @lcpr case=start
// [2,2,2,2,2]\n4\n
// @lcpr case=end

// @lcpr case=start
// [3,2,3,2,3,2]\n2\n
// @lcpr case=end

 */
