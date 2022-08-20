/*
 * @lc app=leetcode.cn id=219 lang=javascript
 *
 * [219] 存在重复元素 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

var containsNearbyDuplicate = function(nums, k) {
	for (let i = 0; i < nums.length; i++) {
		const r = nums.indexOf(nums[i], i + 1);
		console.log(i, r);
		if (r !== -1 && r - i <= k) {
			return true;
		}
	}
	return false;
};
// @lc code=end

