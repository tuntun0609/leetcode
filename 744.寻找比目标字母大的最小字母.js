/*
 * @lc app=leetcode.cn id=744 lang=javascript
 *
 * [744] 寻找比目标字母大的最小字母
 */

// @lc code=start
/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {
	const length = letters.length;
	let nextGreater = letters[0];
	for (let i = 0; i < length; i++) {
		if (letters[i] > target) {
			nextGreater = letters[i];
			break;
		}
	}
	return nextGreater;
};
// @lc code=end
