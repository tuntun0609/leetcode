/*
 * @lc app=leetcode.cn id=78 lang=typescript
 * @lcpr version=30204
 *
 * [78] 子集
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function subsets(nums: number[]): number[][] {
  const result: number[][] = []
  backtrack(result, nums, 0, [])
  return result
}

const backtrack = (
  res: number[][],
  nums: number[],
  startIndex: number,
  path: number[]
) => {
  res.push([...path])

  for (let i = startIndex; i < nums.length; i++) {
    path.push(nums[i])
    backtrack(res, nums, i + 1, path)
    path.pop()
  }
}
// @lc code=end

/*
// @lcpr case=start
// [1,2,3]\n
// @lcpr case=end

// @lcpr case=start
// [0]\n
// @lcpr case=end

 */
