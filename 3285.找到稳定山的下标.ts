/*
 * @lc app=leetcode.cn id=3285 lang=typescript
 * @lcpr version=30204
 *
 * [3285] 找到稳定山的下标
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function stableMountains(height: number[], threshold: number): number[] {
  const index = []
  for (let i = 1; i < height.length; i++) {
    if (height[i - 1] > threshold) {
      index.push(i)
    }
  }
  return index
}
// @lc code=end

/*
// @lcpr case=start
// [1,2,3,4,5]\n2\n
// @lcpr case=end

// @lcpr case=start
// [10,1,10,1,10]\n3\n
// @lcpr case=end

// @lcpr case=start
// [10,1,10,1,10]\n10\n
// @lcpr case=end

 */
