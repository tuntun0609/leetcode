/*
 * @lc app=leetcode.cn id=392 lang=javascript
 *
 * [392] 判断子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
	let sm = 0;
	let tm = 0;
	while (sm < s.length && tm < t.length) {
		if (s[sm] === t[tm]) {
			sm++;
		}
		tm++;
	}
	return sm === s.length;
};
// @lc code=end

