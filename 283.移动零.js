/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
	const len = nums.length;
	let i = 0;
	let j = 0;
	while(j < len) {
		if (nums[j] !== 0) {
			const temp = nums[j];
			nums[j] = nums[i];
			nums[i] = temp;
			i++;
		}
		j++;
	}
};
// @lc code=end

