/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
	let res = [];
	let carry = 0;
	for(let i = a.length - 1, j = b.length - 1;i >= 0 || j >= 0; i--, j--) {
		let sum = carry;
		sum += i >= 0 ? parseInt(a[i]) : 0;
		sum += j >= 0 ? parseInt(b[j]) : 0;
		res.push(sum % 2);
		carry = Math.floor(sum / 2);
	}
	res.push(carry == 1 ? carry : '');
	return res.reverse().join('');
};
// @lc code=end

