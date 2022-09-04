/*
 * @lc app=leetcode.cn id=414 lang=javascript
 *
 * [414] 第三大的数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
	nums = [...(new Set(nums))];
	if (nums.length < 3) {
		return Math.max(...nums);
	}
	const res = [];
	for (let i = 0; i < 3; i++) {
		const max = Math.max(...nums);
		nums.splice(nums.indexOf(max), 1);
		res.push(max);
	}
	return Math.min(...res);
};
// @lc code=end

