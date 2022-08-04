/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
	let len = digits.length;
	for (let i = len - 1; i >= 0; i--) {
		if (digits[i] == 9) {
			digits[i] = 0;
		} else {
			digits[i]++;
			return digits
		}
	};
	let res = new Array(len + 1).fill(0);
	res[0] = 1;
	return res;
};
// @lc code=end

