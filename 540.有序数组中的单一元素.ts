/*
 * @lc app=leetcode.cn id=540 lang=typescript
 * @lcpr version=30204
 *
 * [540] 有序数组中的单一元素
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function singleNonDuplicate(nums: number[]): number {
  let left = 0
  let right = nums.length - 1
  while (left < right) {
    const mid = Math.floor((right - left) / 2) + left
    if (mid % 2 === 0) {
      if (nums[mid] === nums[mid + 1]) {
        left = mid + 1
      } else {
        right = mid
      }
    } else {
      if (nums[mid] === nums[mid - 1]) {
        left = mid + 1
      } else {
        right = mid
      }
    }
  }
  return nums[left]
}
// @lc code=end

/*
// @lcpr case=start
// [1,1,2,3,3,4,4,8,8]\n
// @lcpr case=end

// @lcpr case=start
// [3,3,7,7,10,11,11]\n
// @lcpr case=end

 */
