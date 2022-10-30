/*
 * @lc app=leetcode.cn id=594 lang=javascript
 *
 * [594] 最长和谐子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
	const sortNums = nums.sort((a, b) => a - b);
	let res = 0;
	let index = 0;
	for (let i = 0; i < sortNums.length; i++) {
		while(sortNums[i] - sortNums[index] > 1) {
			index++;
		}
		if (sortNums[i] - sortNums[index] === 1) {
			res = Math.max(res, i - index + 1);
		}
	}
	return res;
};
// @lc code=end

