/*
 * @lc app=leetcode.cn id=455 lang=javascript
 *
 * [455] 分发饼干
 */

// @lc code=start
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
	g.sort((a, b) => a - b);
	s.sort((a, b) => a - b);

	let res = 0;

	s.forEach((item) => {
		if (item >= g[0]) {
			res++;
			g.shift();
		}
	});
	return res;
};
// @lc code=end

