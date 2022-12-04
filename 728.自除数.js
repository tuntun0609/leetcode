/*
 * @lc app=leetcode.cn id=728 lang=javascript
 *
 * [728] 自除数
 */

// @lc code=start
/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left, right) {
	const ans = [];
	for (let i = left; i <= right; i++) {
		if (isSelfDividing(i)) {
			ans.push(i);
		}
	}
	return ans;
};

const isSelfDividing = (num) => {
	let temp = num;
	while (temp > 0) {
		const digit = temp % 10;
		if (digit === 0 || num % digit !== 0) {
			return false;
		}
		temp = Math.floor(temp / 10);
	}
	return true;
};
// @lc code=end
