/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
	nums.sort((a, b) => a - b);
	for (let i = 0; i < nums.length;) {
		if (nums[i] === nums[i+1]) {
			i += 2;
		} else {
			return nums[i];
		}
	}
};
// @lc code=end

