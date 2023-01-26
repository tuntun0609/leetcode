/*
 * @lc app=leetcode.cn id=806 lang=javascript
 *
 * [806] 写字符串需要的行数
 */

// @lc code=start
/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
const MAX_WIDTH = 100;
var numberOfLines = function (widths, s) {
	let lines = 1;
	let width = 0;
	for (let i = 0; i < s.length; i++) {
		const need = widths[s[i].charCodeAt() - 'a'.charCodeAt()];
		width += need;
		if (width > MAX_WIDTH) {
			lines++;
			width = need;
		}
	}
	return [lines, width];
};
// @lc code=end
