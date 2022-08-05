/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
	let sLength = s.length;
	let luomaMap = new Map([
		['I', 1],
		['V', 5],
		['X', 10],
		['L', 50],
		['C', 100],
		['D', 500],
		['M', 1000],
	]);
	let sum = 0;
	for (let i = 0; i < sLength; i++) {
		if (i < sLength - 1 && luomaMap.get(s[i]) < luomaMap.get(s[i + 1])) {
			sum -= luomaMap.get(s[i]);
		} else {
			sum += luomaMap.get(s[i]);
		}
	}
	return sum;
};
// @lc code=end

