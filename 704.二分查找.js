/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
	let left = 0;
	let right = nums.length - 1;
	while (left <= right) {
		const mid = Math.floor((right - left) / 2) + left;
		const num = nums[mid];
		if (num === target) {
			return mid;
		} else if (num > target) {
			right = mid - 1;
		} else {
			left = mid + 1;
		}
	}
	return -1;
};
// @lc code=end
