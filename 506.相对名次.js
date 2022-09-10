/*
 * @lc app=leetcode.cn id=506 lang=javascript
 *
 * [506] 相对名次
 */

// @lc code=start
/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
	const scoreArr = [];
	const res = new Array(score.length).fill(0);
	for (let i = 0; i < score.length; i++) {
		scoreArr.push([i, score[i]]);
	}
	scoreArr.sort((a, b) => b[1] - a[1]);
	for (let i = 0; i < scoreArr.length; i++) {
		if (i === 0) {
			res[scoreArr[i][0]] = 'Gold Medal';
		} else if (i === 1) {
			res[scoreArr[i][0]] = 'Silver Medal';
		} else if (i === 2) {
			res[scoreArr[i][0]] = 'Bronze Medal';
		} else {
			res[scoreArr[i][0]] = (i + 1).toString();
		}
	}
	return res;
};
// @lc code=end

