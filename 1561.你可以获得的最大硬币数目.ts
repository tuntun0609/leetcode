/*
 * @lc app=leetcode.cn id=1561 lang=typescript
 * @lcpr version=30204
 *
 * [1561] 你可以获得的最大硬币数目
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function maxCoins(piles: number[]): number {
  const sortPiles = piles.sort((a, b) => b - a)

  const n = sortPiles.length
  let sum = 0
  const splitNum = n / 3
  for (let i = 0; i < splitNum; i++) {
    sum += sortPiles[i * 2 + 1]
  }
  return sum
}
// @lc code=end

/*
// @lcpr case=start
// [2,4,1,2,7,8]\n
// @lcpr case=end

// @lcpr case=start
// [2,4,5]\n
// @lcpr case=end

// @lcpr case=start
// [9,8,7,6,5,1,2,3,4]\n
// @lcpr case=end

 */
