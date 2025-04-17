/*
 * @lc app=leetcode.cn id=2176 lang=typescript
 * @lcpr version=30204
 *
 * [2176] 统计数组中相等且可以被整除的数对
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function countPairs(nums: number[], k: number): number {
  const indexMap = new Map<number, number[]>()
  nums.forEach((num, index) => {
    if (!indexMap.has(num)) {
      indexMap.set(num, [])
    }
    indexMap.get(num)?.push(index)
  })
  let count = 0
  for (const [num, indexes] of indexMap.entries()) {
    if (indexes.length < 2) {
      continue
    }
    for (let i = 0; i < indexes.length; i++) {
      for (let j = i + 1; j < indexes.length; j++) {
        if ((indexes[i] * indexes[j]) % k === 0) {
          count++
        }
      }
    }
  }
  return count
}
// @lc code=end

/*
// @lcpr case=start
// [3,1,2,2,2,1,3]\n2\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3,4]\n1\n
// @lcpr case=end

 */
