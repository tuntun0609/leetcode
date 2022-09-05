/*
 * @lc app=leetcode.cn id=463 lang=javascript
 *
 * [463] 岛屿的周长
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
	let res = 0;
	const dx = [0, 1, 0, -1];
	const dy = [1, 0, -1, 0];
	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[0].length; j++) {
			if (grid[i][j]) {
				for (let k = 0; k < 4; k++) {
					let tx = i + dx[k];
					let ty = j + dy[k];
					if (tx < 0 || tx >= grid.length || ty < 0 || ty >= grid[0].length || !grid[tx][ty]) {
						res += 1;
					}
				}
			}
		}
	}
	return res;
};
// @lc code=end

