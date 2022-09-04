/*
 * @lc app=leetcode.cn id=415 lang=javascript
 *
 * [415] 字符串相加
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
	let num1Mark = num1.length - 1;
	let num2Mark = num2.length - 1;
	let ifAddOne = 0;
	const res = [];
	while (num1Mark >= 0 || num2Mark >= 0 || ifAddOne !== 0) {
		const n1 = num1Mark >= 0 ? parseInt(num1[num1Mark]) : 0;
		const n2 = num2Mark >= 0 ? parseInt(num2[num2Mark]) : 0;
		const temp = n1 + n2 + ifAddOne;
		res.push(temp % 10);
		ifAddOne = Math.floor(temp / 10);
		num1Mark--;
		num2Mark--;
	}
	return res.reverse().join('');
};
// @lc code=end

