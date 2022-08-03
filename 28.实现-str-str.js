/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
	let haystackLen = haystack.length;
	let needleLen = needle.length;

	for (let i = 0; i <= haystackLen - needleLen; i++) {
		let mark = true;
		for (let j = 0; j < needleLen; j++) {
			if (haystack[i+j] !== needle[j]) {
				mark = false;
				break;
			}
		}
		if (mark) {
			return i;
		}
	}
	return -1;
};
// @lc code=end

