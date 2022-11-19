/*
 * @lc app=leetcode.cn id=674 lang=javascript
 *
 * [674] 最长连续递增序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
	let res = 0;
	let left = 0;
	for (let i = 0; i < nums.length; i++) {
		if (i > 0  && nums[i] <= nums[i - 1]) {
			left = i;
		}
		res = Math.max(res, i - left + 1);
	}
	return res;
};
// @lc code=end

