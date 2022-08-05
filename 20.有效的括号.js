/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
	const sLen = s.length;
	if (sLen % 2 === 1) {
		return false;
	}
	const pairs = new Map([
		[')', '('],
		['}', '{'],
		[']', '['],
	]);
	const pairStack = [];
	for (let pair of s) {
		if (pairs.has(pair)) {
			if (!pairStack.length || pairStack[pairStack.length - 1] !== pairs.get(pair)) {
				return false;
			}
			pairStack.pop();
		} else {
			pairStack.push(pair);
		}
	};
	return !pairStack.length;
};
// @lc code=end

