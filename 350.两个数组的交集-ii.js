/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
	const nums1Map = new Map();
	const nums2Map = new Map();
	for (let i = 0; i < nums1.length; i++) {
		const item = nums1[i];
		if (nums1Map.has(item)) {
			nums1Map.set(item, nums1Map.get(item) + 1);
		} else {
			nums1Map.set(item, 1);
		}
	}
	for (let i = 0; i < nums2.length; i++) {
		const item = nums2[i];
		if (nums2Map.has(item)) {
			nums2Map.set(item, nums2Map.get(item) + 1);
		} else {
			nums2Map.set(item, 1);
		}
	}
	let res = [];
	const intersectMap = (n1, n2) => {
		for (const [key] of n1) {
			if (n2.has(key)) {
				if (n1.get(key) < n2.get(key)) {
					res = res.concat((new Array(n1.get(key))).fill(key));
				} else {
					res = res.concat((new Array(n2.get(key))).fill(key));
				}
			}
		}
	}
	if(nums1Map.size < nums2Map.size) {
		intersectMap(nums1Map, nums2Map);
	} else {
		intersectMap(nums2Map, nums1Map);
	}
	return res;
};
// @lc code=end

