/*
 * @lc app=leetcode.cn id=598 lang=javascript
 *
 * [598] 范围求和 II
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function(m, n, ops) {
	let minM = m;
	let minN = n;
	for (const op of ops) {
		minM = Math.min(minM, op[0]);
		minN = Math.min(minN, op[1]);
	}
	return minM * minN;
};
// @lc code=end

