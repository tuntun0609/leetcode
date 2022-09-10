/*
 * @lc app=leetcode.cn id=500 lang=javascript
 *
 * [500] 键盘行
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
	const keyBoardRow = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm'];

	const getExpectRow = (str) => (keyBoardRow.find((item) => {
		return item.indexOf(str[0].toLowerCase()) !== -1;
	}))

	const isInOneRow = (str) => {
		const expectRow = getExpectRow(str);
		console.log(expectRow);
		for (let i = 0; i < str.length; i++) {
			if (expectRow.indexOf(str[i].toLowerCase()) === -1) {
				return false
			}
		}
		return true;
	}

	const res = [];
	words.forEach(item => {
		if (isInOneRow(item)) {
			res.push(item);
		}
	});
	return res;
};
// @lc code=end

