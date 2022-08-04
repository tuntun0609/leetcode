/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
	let sArr = s.split(' ');
	let resArr = [];
	sArr.forEach((item) => {
		if (item) {
			resArr.push(item);
		}
	})
	return resArr[resArr.length - 1].length;
};
// @lc code=end

