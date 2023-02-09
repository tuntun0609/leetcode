/*
 * @lc app=leetcode.cn id=884 lang=javascript
 *
 * [884] 两句话中的不常见单词
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
	const getWordMap = (s) => {
		const sArr = s.split(' ');
		const map = new Map();
		for (let i = 0; i < sArr.length; i++) {
			if (map.has(sArr[i])) {
				map.set(sArr[i], map.get(sArr[i]) + 1);
			} else {
				map.set(sArr[i], 1);
			}
		}
		return map;
	};

	const s1WordMap = getWordMap(s1);
	const s2WordMap = getWordMap(s2);
	const res = new Set();

	for (const [key, value] of s1WordMap.entries()) {
		if (value === 1 && s2WordMap.get(key) === undefined) {
			res.add(key);
		}
	}

	for (const [key, value] of s2WordMap.entries()) {
		if (value === 1 && s1WordMap.get(key) === undefined) {
			res.add(key);
		}
	}

	return [...res];
};
// @lc code=end

