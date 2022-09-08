/*
 * @lc app=leetcode.cn id=476 lang=javascript
 *
 * [476] 数字的补数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
	let highbit = 0;
	for (let i = 1; i <= 30; ++i) {
			if (num >= 1 << i) {
					highbit = i;
			} else {
					break;
			}            
	}
	const mask = highbit == 30 ? 0x7fffffff : (1 << (highbit + 1)) - 1;
	return num ^ mask;
};
// @lc code=end

