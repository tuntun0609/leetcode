/*
 * @lc app=leetcode.cn id=821 lang=javascript
 *
 * [821] 字符的最短距离
 */

// @lc code=start
/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function (s, c) {
	// 两次遍历
	const n = s.length;
	const ans = new Array(n).fill(0);

	for (let i = 0, idx = -n; i < n; ++i) {
		if (s[i] === c) {
			idx = i;
		}
		ans[i] = i - idx;
	}

	for (let i = n - 1, idx = 2 * n; i >= 0; --i) {
		if (s[i] == c) {
			idx = i;
		}
		ans[i] = Math.min(ans[i], idx - i);
	}
	return ans;
};
// @lc code=end

