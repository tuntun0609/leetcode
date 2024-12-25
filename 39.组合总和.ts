/*
 * @lc app=leetcode.cn id=39 lang=typescript
 * @lcpr version=30204
 *
 * [39] 组合总和
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function combinationSum(candidates: number[], target: number): number[][] {
  // 排序并筛选小于等于target的数
  const sourceArray = candidates
    .sort((a, b) => a - b)
    .filter((item) => item <= target)

  const result: number[][] = []

  const dfs = (current: number[]) => {
    const sum = current.reduce((a, b) => a + b, 0)
    if (sum === target) {
      result.push(current)
      return
    } else if (sum > target) {
      return
    }

    for (let i = 0; i < sourceArray.length; i++) {
      dfs([...current, sourceArray[i]])
    }
  }

  dfs([])

  // result 去重
  const uniqueResult = [
    ...new Set(result.map((item) => item.sort((a, b) => a - b).join(','))),
  ].map((item) => item.split(',').map(Number))

  return uniqueResult
}
// @lc code=end

/*
// @lcpr case=start
// [2,3,6,7]\n7\n
// @lcpr case=end

// @lcpr case=start
// [2,3,5]\n8\n
// @lcpr case=end

// @lcpr case=start
// [2]\n1\n
// @lcpr case=end

 */
