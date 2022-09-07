/*
 * @lc app=leetcode.cn id=482 lang=javascript
 *
 * [482] 密钥格式化
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function(s, k) {
	let formatS = s.split('-').join('');
	let resArr = [];
	let mark = 0;
	for (let i = formatS.length - 1; i >= 0; i--) {
		resArr.push(formatS[i].toUpperCase())
		mark++;
		if (mark === k && i !== 0) {
			resArr.push('-')
			mark = 0;
		}
	}
	return resArr.reverse().join('');
};
// @lc code=end

