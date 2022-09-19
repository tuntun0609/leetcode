/*
 * @lc app=leetcode.cn id=541 lang=javascript
 *
 * [541] 反转字符串 II
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
	const reverseItem = (arr, left, right) => {
		while (left < right) {
			const temp = arr[left];
			arr[left] = arr[right];
			arr[right] = temp;
			left++;
			right--;
		}
	};
	const n = s.length;
	const arr = s.split('');
	for (let i = 0; i < n; i += 2 * k) {
		reverseItem(arr, i, Math.min(i + k, n) - 1);
	}
	return arr.join('');
};

// @lc code=end
