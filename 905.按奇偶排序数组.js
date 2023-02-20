/*
 * @lc app=leetcode.cn id=905 lang=javascript
 *
 * [905] 按奇偶排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
	let n = nums.length, index = 0;
	const res = new Array(n).fill(0);
	for (const num of nums) {
		if (num % 2 === 0) {
			res[index++] = num;
		}
	}
	for (const num of nums) {
		if (num % 2 === 1) {
			res[index++] = num;
		}
	}
	return res;
};
// @lc code=end

