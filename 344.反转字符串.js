/*
 * @lc app=leetcode.cn id=344 lang=javascript
 *
 * [344] 反转字符串
 */

// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
	// 方法一
	// s.reverse();
	// 方法二
	const n = s.length;
	for (let left = 0, right = n - 1; left < right; ++left, --right) {
		[s[left], s[right]] = [s[right], s[left]];
	}
};
// @lc code=end

