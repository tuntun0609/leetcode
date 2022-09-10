/*
 * @lc app=leetcode.cn id=496 lang=javascript
 *
 * [496] 下一个更大元素 I
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
	const findBigger = (index) => {
		for (let i = index + 1; i < nums2.length; i++) {
			if (nums2[i] !== undefined && nums2[i] > nums2[index]) {
				return nums2[i];
			}
		}
		return -1;
	}
	const res = [];
	nums1.forEach((item) => {
		const index = nums2.indexOf(item);
		res.push(findBigger(index));
	});
	return res;
};
// @lc code=end

