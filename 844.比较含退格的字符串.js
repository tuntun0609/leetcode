/*
 * @lc app=leetcode.cn id=844 lang=javascript
 *
 * [844] 比较含退格的字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
	const getFinalStr = (str) => {
		const resArr = [];
		for (let i = 0; i < str.length; i++) {
			if (str[i] !== '#') {
				resArr.push(str[i]);
			} else {
				resArr.pop();
			}
		}
		return resArr.join('');
	}
	if (getFinalStr(s) === getFinalStr(t)) {
		return true;
	}
	return false;
};
// @lc code=end

