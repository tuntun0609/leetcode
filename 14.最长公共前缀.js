/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
	if (strs.length == 0) {
		return '';
	}
	let commonStr = strs[0];
	let mark = 0;
	for (let i = 1; i < strs.length; i++) {
		commonStr = findCommon(commonStr, strs[i]);
		if (commonStr.length == 0) {
			return '';
		}
	}
	return commonStr;
};

const findCommon = (str1, str2) => {
	let len = Math.min(str1.length, str2.length);
	let mark = 0;
	while(mark < len && str1[mark] == str2[mark]) {
		mark++;
	}
	return str1.slice(0, mark);
}
// @lc code=end

