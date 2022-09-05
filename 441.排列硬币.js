/*
 * @lc app=leetcode.cn id=441 lang=javascript
 *
 * [441] 排列硬币
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
	let res = 1;
	while(n >= ((res * (res + 1)) / 2)) {
		res++;
	}
	if (n < (res * (res + 1)) / 2) {
		res--;
	}
	return res;
};
// @lc code=end

