/*
 * @lc app=leetcode.cn id=228 lang=javascript
 *
 * [228] 汇总区间
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string[]}
 */

function t(arr) {
	if (arr.length == 1) {
		return `${arr[0]}`;
	} else {
		return `${arr[0]}->${arr[1]}`
	}
}

var summaryRanges = function(nums) {
	const res = [];
	let i = 0;
	while(i < nums.length) {
		const l = i;
		i++;
		while (i < nums.length && nums[i] === nums[i - 1] + 1) {
			i++;
		}
		const r = i - 1;
		if (l < r) {
			res.push(t([nums[l], nums[r]]));
		} else {
			res.push(t([nums[l]]))
		}
	}
	return res;
};
// @lc code=end

