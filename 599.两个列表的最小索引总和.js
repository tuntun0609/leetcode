/*
 * @lc app=leetcode.cn id=599 lang=javascript
 *
 * [599] 两个列表的最小索引总和
 */

// @lc code=start
/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
	const list1Map = new Map();
	for (let i = 0; i < list1.length; i++) {
		list1Map.set(list1[i], i)
	}

	const res = [];
	let index = Number.MAX_VALUE;
	for (let i = 0; i < list2.length; i++) {
		if (list1Map.has(list2[i])) {
			if (i + list1Map.get(list2[i]) < index) {
				res.length = 0;
				res.push(list2[i]);
				index = i + list1Map.get(list2[i]);
			} else if (i + list1Map.get(list2[i]) === index) {
				res.push(list2[i]);
			}
		}	
	}
	return res;
};
// @lc code=end

