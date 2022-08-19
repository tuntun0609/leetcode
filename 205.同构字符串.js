/*
 * @lc app=leetcode.cn id=205 lang=javascript
 *
 * [205] 同构字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
	const s2t = new Map();
	const t2s = new Map();
	const len = s.length;
	for (let i = 0; i < len; i++) {
		const sItem = s[i];
		const tItem = t[i];
		if ((s2t.get(sItem) && s2t.get(sItem) !== tItem) || (t2s.get(tItem) && t2s.get(tItem) !== sItem)) {
			return false;
		} else {
			s2t.set(sItem, tItem);
			t2s.set(tItem, sItem);
		}
	}
	return true;
};
// @lc code=end

