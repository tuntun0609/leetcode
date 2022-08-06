/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
	let m1 = 0;
	let m2 = 0;
	let res = [];
	while(m1 < m || m2 < n) {
		if (m1 === m) {
			cur = nums2[m2++];
		} else if (m2 === n) {
				cur = nums1[m1++];
		} else if (nums1[m1] < nums2[m2]) {
				cur = nums1[m1++];
		} else {
				cur = nums2[m2++];
		}
		res[m1 + m2 - 1] = cur;
	}
	for (let i = 0; i != m + n; ++i) {
		nums1[i] = res[i];
	}
};
// @lc code=end

