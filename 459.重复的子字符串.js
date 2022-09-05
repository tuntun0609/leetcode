/*
 * @lc app=leetcode.cn id=459 lang=javascript
 *
 * [459] 重复的子字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
	for (let i = 0; i < Math.floor(s.length / 2); i++) {
		const str = s.slice(0, i + 1);
		if (s.length % str.length === 0) {
			const tempStr = str.repeat(s.length / str.length);
			if (tempStr === s) {
				return true;
			}
		}
	}
	return false;
};
// @lc code=end

