/*
 * @lc app=leetcode.cn id=492 lang=javascript
 *
 * [492] 构造矩形
 */

// @lc code=start
/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function(area) {
	const mid = Math.ceil(Math.sqrt(area));
	const arr = [];
	for (let i = 1; i <= mid; i++) {
		if (area % i === 0) {
			if (area / i < i) {
				arr.push([i, area / i]);
			} else {
				arr.push([area / i, i]);
			}
		}
	}
	return arr[arr.length - 1];
};
// @lc code=end

