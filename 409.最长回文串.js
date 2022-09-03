/*
 * @lc app=leetcode.cn id=409 lang=javascript
 *
 * [409] 最长回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
	const map = new Map();
	for (let i = 0; i < s.length; i++) {
		const letter = s[i];
		if (map.has(letter)) {
			map.set(letter, map.get(letter) + 1);
		} else {
			map.set(letter, 1);
		}
	}
	let res = 0;
	for (const [l, n] of map) {
		if (n > 1) {
			map.set(l, n % 2);
			res += 2 * Math.floor(n / 2);	
		}
	}
	for (const [l, n] of map) {
		if (n === 1) {
			res++;
			break;
		}
	}
	return res;
};
// @lc code=end

