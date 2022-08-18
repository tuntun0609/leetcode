/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
const nextNum = (num) => {
	let next = 0;
	let str = num.toString();
	for (let i = 0; i < str.length; i++) {
		next += Math.pow(parseInt(str[i]), 2);
	}
	return next;
}
var isHappy = function(n) {
	let slow = nextNum(n), fast = nextNum(nextNum(n));
	while(fast != 1 && slow !== fast ){
		slow = nextNum(slow)
		fast = nextNum(nextNum(fast))
	}
	return fast === 1;
};
// @lc code=end

