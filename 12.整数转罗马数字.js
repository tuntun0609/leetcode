/*
 * @lc app=leetcode.cn id=12 lang=javascript
 *
 * [12] 整数转罗马数字
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
	let luomaMap = [
		[1000, 'M'],
		[900 , 'CM'],
		[500, 'D'],
		[400 , 'CD'],
		[100, 'C'],
		[90 , 'XC'],
		[50, 'L'],
		[40 , 'XL'],
		[10, 'X'],
		[9, 'IX'],
		[5, 'V'],
		[4, 'IV'],
		[1, 'I'],
	];
	const res = [];
	for (const [value, Luoma] of luomaMap) {
		while (num >= value) {
			num -= value;
			res.push(Luoma);
		}
		if (num == 0) {
			break;
		}
	}
	return res.join('');
};
// @lc code=end

