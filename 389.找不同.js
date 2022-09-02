/*
 * @lc app=leetcode.cn id=389 lang=javascript
 *
 * [389] 找不同
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
	const sArr = s.split('');
	for (let i = 0; i < t.length; i++) {
		const letter = t[i];
		if (sArr.indexOf(letter) === -1) {
			return letter;
		}
		sArr.splice(sArr.indexOf(letter), 1);
	}
};
// @lc code=end

