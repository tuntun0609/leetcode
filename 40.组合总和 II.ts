/*
 * @lc app=leetcode.cn id=40 lang=typescript
 * @lcpr version=30204
 *
 * [40] 组合总和 II
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function combinationSum2(candidates: number[], target: number): number[][] {
  const backtrace = (
    res: number[][],
    candidates: number[],
    target: number,
    path: number[],
    begin: number
  ) => {
    if (target === 0) {
      res.push([...path])
      return
    }

    for (let i = begin; i < candidates.length; i++) {
      let num = candidates[i]
      if (target < 0) continue
      if (target < num) continue
      // 如果该元素与左边元素相等，说明该搜索分支重复，直接跳过
      if (i > begin && num == candidates[i - 1]) continue

      path.push(num)
      target -= num
      backtrace(res, candidates, target, path, i + 1)
      path.pop()
      target += num
    }
  }

  let list: number[][] = []
  candidates.sort()
  backtrace(list, candidates, target, [], 0)
  return list
}
// @lc code=end

/*
// @lcpr case=start
// [10,1,2,7,6,1,5]\n8\n
// @lcpr case=end

// @lcpr case=start
// [2,5,2,1,2]\n5\n
// @lcpr case=end

// @lcpr case=start
// [1, 1, 1, 1]\n27\n
// @lcpr case=end

 */
