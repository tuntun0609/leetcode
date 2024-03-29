/*
 * @lc app=leetcode.cn id=977 lang=javascript
 *
 * [977] 有序数组的平方
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
	const res = [...nums];
	for (let i = 0; i < res.length; i++) {
		res[i] = res[i] * res[i]
	}
	res.sort((a, b) => a - b)
	return res;
};
// @lc code=end

