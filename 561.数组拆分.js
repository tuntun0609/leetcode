/*
 * @lc app=leetcode.cn id=561 lang=javascript
 *
 * [561] 数组拆分
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
	const n = [...nums];
	n.sort((a, b) => a - b);
	let res = 0;
	n.forEach((item, index) => {
		if (index % 2 === 0) {
			res += item;
		}
	})
	return res;
};
// @lc code=end

