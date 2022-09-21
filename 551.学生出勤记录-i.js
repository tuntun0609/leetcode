/*
 * @lc app=leetcode.cn id=551 lang=javascript
 *
 * [551] 学生出勤记录 I
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
	const ARule = (str) => {
		let aNum = 0;
		for (let i = 0; i < str.length; i++) {
			if (str[i] === 'A') {
				aNum++;
			}
			if (aNum >= 2) {
				return false;
			}
		}
		return true;
	}
	const LRule = (str) => {
		return str.indexOf('LLL') === -1;
	}
	if (ARule(s) && LRule(s)) {
		return true;
	}
	return false;
};
// @lc code=end

