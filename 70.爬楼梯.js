/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
	let p = 0, q = 0, r = 1;
	for (let i = 1; i <= n; ++i) {
			p = q;
			q = r;
			r = p + q;
	}
	return r;
};
// @lc code=end

