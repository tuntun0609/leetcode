/*
 * @lc app=leetcode.cn id=566 lang=javascript
 *
 * [566] 重塑矩阵
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {
	const m = mat.length;
	const n = mat[0].length;
	// 元素个数不同，直接返回
	if (m * n != r * c) {
			return mat;
	}
	// 行 = Math.floor(x / c)
	// 列 = x % c
	const ans = new Array(r).fill(0).map(() => new Array(c).fill(0));
	for (let x = 0; x < m * n; ++x) {
		ans[Math.floor(x / c)][x % c] = mat[Math.floor(x / n)][x % n];
	}
	return ans;
};
// @lc code=end

