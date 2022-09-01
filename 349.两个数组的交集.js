/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
	const n1Set = new Set(nums1);
	const n2Set = new Set(nums2);
	const intersectionSet = (set1, set2) => {
		const res = [];
		for (const val of set1) {
			if (set2.has(val)) {
				res.push(val);
			}
		}
		return res;
	}
	if (n1Set.size < n2Set.size) {
		return intersectionSet(n1Set, n2Set);
	}
	return intersectionSet(n2Set, n1Set);
};
// @lc code=end

