/*
 * @lc app=leetcode.cn id=645 lang=javascript
 *
 * [645] 错误的集合
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
	const errorNums = new Array(2).fill(0);
	const n = nums.length;
	const map = new Map();
	for (const num of nums) {
		map.set(num, (map.get(num) || 0) + 1);
	}
	for (let i = 1; i <= n; i++) {
		const count = map.get(i) || 0;
		if (count === 2) {
			errorNums[0] = i;
		} else if (count === 0) {
			errorNums[1] = i;
		}
	}
	return errorNums;
};
// @lc code=end
