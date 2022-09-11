/*
 * @lc app=leetcode.cn id=507 lang=javascript
 *
 * [507] 完美数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
	if (num === 1) {
		return false;
	}
	const arr = [];
	const mid = Math.ceil(Math.sqrt(num));
	for (let i = 1; i < mid; i++) {
		if (num % i === 0) {
			arr.push(i);
			arr.push(num / i);
		}
	}
	arr.splice(arr.indexOf(num), 1);
	let sum = 0;
	arr.forEach((item) => {
		sum += item;
	})
	if (sum === num) {
		return true;
	}
	return false;
};
// @lc code=end

