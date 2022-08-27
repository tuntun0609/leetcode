/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
	if (s.length !== t.length) {
		return false;
	}
	const sMap = new Map();
	const tMap = new Map();
	for (let i = 0; i < s.length; i++) {
		if (sMap.has(s[i])) {
			sMap.set(s[i], sMap.get(s[i]) + 1);
		} else {
			sMap.set(s[i], 1);
		}
	}
	for (let i = 0; i < t.length; i++) {
		if (tMap.has(t[i])) {
			tMap.set(t[i], tMap.get(t[i]) + 1);
		} else {
			tMap.set(t[i], 1);
		}
	}
	for (const item of sMap) {
		if (item[1] !== tMap.get(item[0])) {
			return false;
		}
	}
	return true;
};
// @lc code=end

