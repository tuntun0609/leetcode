/*
 * @lc app=leetcode.cn id=191 lang=javascript
 *
 * [191] 位1的个数
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
	let ret = 0;
	while (n) {
		n &= n - 1;
		ret++;
	}
	return ret;
};
// @lc code=end

