/*
 * @lc app=leetcode.cn id=345 lang=javascript
 *
 * [345] 反转字符串中的元音字母
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
	let strArr = [...s];
	const yuanyinSet = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
	let left = 0, right = strArr.length - 1;
	while (left < right) {
		while (left < strArr.length && !yuanyinSet.has(strArr[left])) {
			left++;
		}
		while (right > 0 && !yuanyinSet.has(strArr[right])) {
			right--;
		}
		if (left < right) {
			const temp = strArr[left];
			strArr[left] = strArr[right];
			strArr[right] = temp;
			left++;
			right--;
		}
	}
	return strArr.join('');
};
// @lc code=end

