/*
 * @lc app=leetcode.cn id=557 lang=javascript
 *
 * [557] 反转字符串中的单词 III
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
	const sArr = s.split(' ');
	sArr.forEach((item, i) => {
		sArr[i] = item.split('').reverse().join('');
	})
	return sArr.join(' ');
};
// @lc code=end

