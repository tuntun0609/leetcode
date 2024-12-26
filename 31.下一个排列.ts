/*
 * @lc app=leetcode.cn id=31 lang=typescript
 * @lcpr version=30204
 *
 * [31] 下一个排列
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function nextPermutation(nums: number[]): void {
  const len = nums.length

  if (len < 2) {
    return
  }

  let upIndex = len - 2

  // 第一次遍历，找出 nums[i] < nums[i+1]的上升区间，-1表示整个序列都是降序的了，则可以跳过第二步
  while (upIndex >= -1 && nums[upIndex] >= nums[upIndex + 1]) {
    upIndex--
  }

  // 第二步从右往左找到比upIndex稍微大一点的位置，保证每次变大的幅度最小，并交换位置
  if (upIndex > -1) {
    let littleBiggerIndex = len - 1
    while (
      littleBiggerIndex >= upIndex &&
      nums[upIndex] >= nums[littleBiggerIndex]
    ) {
      littleBiggerIndex--
    }

    ;[nums[upIndex], nums[littleBiggerIndex]] = [
      nums[littleBiggerIndex],
      nums[upIndex],
    ]
  }

  // 第三步，从 upIndex + 1 开始排序
  // 对于第二步交换后，upIndex + 1 之后的数字一定满足降序排列，即[4,3,2,1]， 排序只需要首位交换即可
  let start = upIndex + 1
  let end = len - 1
  while (start <= end) {
    ;[nums[start], nums[end]] = [nums[end], nums[start]]
    start++
    end--
  }
}
// @lc code=end

/*
// @lcpr case=start
// [1,2,3]\n
// @lcpr case=end

// @lcpr case=start
// [3,2,1]\n
// @lcpr case=end

// @lcpr case=start
// [1,1,5]\n
// @lcpr case=end

 */
