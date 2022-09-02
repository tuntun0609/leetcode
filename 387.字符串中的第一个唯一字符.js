/*
 * @lc app=leetcode.cn id=387 lang=javascript
 *
 * [387] 字符串中的第一个唯一字符
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
	const set = new Set();
	for (let i = 0; i < s.length; i++) {
		if (s.indexOf(s[i], i + 1) === -1 && !set.has(s[i])) {
			return i;
		}
		set.add(s[i]);
	}
	return -1;
};
// @lc code=end

