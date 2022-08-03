/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
	let k = 1;
	let mark = 1;
	while (mark < nums.length) {
		if (nums[mark] !== nums[mark - 1]) {
			nums[k] = nums[mark];
			k++;
		}
		mark++;
	}
	return k;
};
// @lc code=end

