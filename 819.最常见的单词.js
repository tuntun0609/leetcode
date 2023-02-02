/*
 * @lc app=leetcode.cn id=819 lang=javascript
 *
 * [819] 最常见的单词
 */

// @lc code=start
/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
 var mostCommonWord = function(paragraph, banned) {
	const bannedSet = new Set();
	for (const word of banned) {
			bannedSet.add(word);
	}
	let maxFrequency = 0;
	const frequencies = new Map();
	let sb = '';
	const length = paragraph.length;
	for (let i = 0; i <= length; i++) {
			if (i < length && isLetter(paragraph[i])) {
					sb = sb + paragraph[i].toLowerCase();
			} else if (sb.length > 0) {
					if (!bannedSet.has(sb)) {
							const frequency = (frequencies.get(sb) || 0) + 1;
							frequencies.set(sb, frequency);
							maxFrequency = Math.max(maxFrequency, frequency);
					}
					sb = '';
			}
	}
	let mostCommon = "";
	for (const [word, frequency] of frequencies.entries()) {
			if (frequency === maxFrequency) {
					mostCommon = word;
					break;
			}
	}
	return mostCommon;
};

const isLetter = (ch) => {
	return (ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z');
}
// @lc code=end

