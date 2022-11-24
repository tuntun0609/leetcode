/*
 * @lc app=leetcode.cn id=680 lang=javascript
 *
 * [680] 验证回文串 II
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
	let l = 0;
	let r = s.length - 1;
	let flag = true;
	while (l <= r) {
		if (s[l] === s[r]) {
			l++;
			r--;
		} else if (!flag) {
			return false;
		} else if (s[l] === s[r - 1] && s[l + 1] !== s[r]) {
			flag = false;
			l++;
			r -= 2;
		} else if (s[l + 1] === s[r] && s[l] !== s[r - 1]) {
			flag = false;
			l += 2;
			r--;
		} else if (s[l + 1] === s[r] && s[l] === s[r - 1]) {
			return (
				validPalindrome(s.slice(l + 1, r)) || validPalindrome(s.slice(l, r - 1))
			);
		} else {
			return false;
		}
	}
	return true;
};
// @lc code=end
