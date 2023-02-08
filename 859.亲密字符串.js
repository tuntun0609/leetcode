/*
 * @lc app=leetcode.cn id=859 lang=javascript
 *
 * [859] 亲密字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function (s, goal) {
	if (s.length != goal.length) {
		return false;
	}

	if (s === goal) {
		const count = new Array(26).fill(0);
		for (let i = 0; i < s.length; i++) {
			count[s[i].charCodeAt() - 'a'.charCodeAt()]++;
			if (count[s[i].charCodeAt() - 'a'.charCodeAt()] > 1) {
				return true;
			}
		}
		return false;
	} else {
		let first = -1, second = -1;
		for (let i = 0; i < s.length; i++) {
			if (s[i] !== goal[i]) {
				if (first === -1)
					first = i;
				else if (second === -1)
					second = i;
				else
					return false;
			}
		}
		return (second !== -1 && s[first] === goal[second] && s[second] === goal[first]);
	}
};
// @lc code=end

