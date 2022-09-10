/*
 * @lc app=leetcode.cn id=495 lang=javascript
 *
 * [495] 提莫攻击
 */

// @lc code=start
/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
	let res = 0;
	let endTime = 0;
	for (let i = 0; i < timeSeries.length; i++) {
		if (timeSeries[i] >= endTime) {
			res += duration;
		} else {
			res += 	timeSeries[i] + duration - endTime;
		}
		endTime = timeSeries[i] + duration;
	}
	return res;
};
// @lc code=end

