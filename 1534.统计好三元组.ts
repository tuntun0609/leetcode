/*
 * @lc app=leetcode.cn id=1534 lang=typescript
 * @lcpr version=30204
 *
 * [1534] 统计好三元组
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function countGoodTriplets(
  arr: number[],
  a: number,
  b: number,
  c: number
): number {
  let count = 0
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        if (
          Math.abs(arr[i] - arr[j]) <= a &&
          Math.abs(arr[j] - arr[k]) <= b &&
          Math.abs(arr[i] - arr[k]) <= c
        ) {
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
// [3,0,1,1,9,7]\n7\n2\n3\n
// @lcpr case=end

// @lcpr case=start
// [1,1,2,2,3]\n0\n0\n1\n
// @lcpr case=end

 */
