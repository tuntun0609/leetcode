/*
 * @lc app=leetcode.cn id=1287 lang=typescript
 * @lcpr version=30204
 *
 * [1287] 有序数组中出现次数超过25%的元素
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function findSpecialInteger(arr: number[]): number {
  const n = arr.length
  const target = n / 4
  const map = new Map<number, number>()
  for (let i = 0; i < n; i++) {
    map.set(arr[i], (map.get(arr[i]) || 0) + 1)
    if (map.get(arr[i])! > target) {
      return arr[i]
    }
  }
  return -1
}
// @lc code=end

/*
// @lcpr case=start
// [1,2,2,6,6,6,6,7,10]\n
// @lcpr case=end

 */
