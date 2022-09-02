/*
 * @lc app=leetcode.cn id=374 lang=javascript
 *
 * [374] 猜数字大小
 */

// @lc code=start
/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
	let l = 1;
	let r = n;
	while(l < r) {
		let mid = Math.floor(l + (r - l) / 2);
		let res = guess(mid);
		if (res === 0) {
			return mid;
		} else if (res === -1) {
			r = mid;
		} else {
			l = mid + 1;
		}
	}
	return l;
};
// @lc code=end

