/*
 * @lc app=leetcode.cn id=258 lang=javascript
 *
 * [258] 各位相加
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
	let res = num;
	const main = (n) => {
		let r = 0;
		n = n.toString();
		for (let i = 0; i < n.length; i++) {
			r += parseInt(n[i]);
		}
		return r;
	}
	while(!(res.toString().length === 1)) {
		res = main(res);
	}
	return res;
};
// @lc code=end

