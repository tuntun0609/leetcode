/*
 * @lc app=leetcode.cn id=326 lang=javascript
 *
 * [326] 3 的幂
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
	if (n < 0) {
		return false;
	}
	while (n !== 0 && n % 3 === 0) {
		n = Math.floor(n / 3);
	}
	return n === 1;
};
// @lc code=end

