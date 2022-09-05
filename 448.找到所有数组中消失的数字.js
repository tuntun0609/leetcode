/*
 * @lc app=leetcode.cn id=448 lang=javascript
 *
 * [448] 找到所有数组中消失的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
	const numsSet = new Set(nums);
	const allArr = [];
	const res = [];
	for (let i = 1; i <= nums.length; i++) {
		allArr.push(i);	
	}
	for (let i = 0; i < allArr.length; i++) {
		if (!numsSet.has(allArr[i])) {
			res.push(allArr[i]);
		}
	}
	return res;
};
// @lc code=end

