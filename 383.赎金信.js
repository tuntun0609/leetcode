/*
 * @lc app=leetcode.cn id=383 lang=javascript
 *
 * [383] 赎金信
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
	if (ransomNote.length > magazine.length) {
		return false;
	}
	let ransomNoteArr = ransomNote.split('');
	for (let i = 0; i < magazine.length; i++) {
		const letter = magazine[i];
		const mark = ransomNoteArr.indexOf(letter);
		if (mark !== -1) {
			ransomNoteArr.splice(mark, 1);
		}
	}
	if (ransomNoteArr.length) {
		return false;
	}
	return true;
};
// @lc code=end

