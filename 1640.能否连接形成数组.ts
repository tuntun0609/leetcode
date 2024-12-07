/*
 * @lc app=leetcode.cn id=1640 lang=typescript
 * @lcpr version=30204
 *
 * [1640] 能否连接形成数组
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function canFormArray(arr: number[], pieces: number[][]): boolean {
  let index = 0
  while (index < arr.length) {
    const piece = pieces.find((p) => p[0] === arr[index])
    if (!piece) return false
    for (let i = 0; i < piece.length; i++) {
      if (piece[i] !== arr[index]) return false
      index++
    }
  }
  return true
}
// @lc code=end

/*
// @lcpr case=start
// [15,88]\n[[88],[15]]\n
// @lcpr case=end

// @lcpr case=start
// [49,18,16]\n[[16,18,49]]\n
// @lcpr case=end

// @lcpr case=start
// [91,4,64,78]\n[[78],[4,64],[91]]\n
// @lcpr case=end

 */
