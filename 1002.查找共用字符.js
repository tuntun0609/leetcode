/*
 * @lc app=leetcode.cn id=1002 lang=javascript
 *
 * [1002] 查找共用字符
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
	let res = [] // 结果数组
	let count = {} // 统计字母与在单词中出现的最少次数
	words[0].split('').forEach(letter => { // 循环第一个单词的每个字符
		let min = Number.MAX_VALUE; // 保存一个js中的最大数
		words.forEach(a => {
			let len = a.split(letter).length - 1 // 巧妙的方法，通过split方法计算一个字符在字符串中出现的次数
			min = len < min ? len : min // 更新每个字母出现次数的最小值
			count[letter] = min // 通过键值对保存字母和最小次数
		})
	})
	Object.keys(count).forEach(key => { // 循环对象count,将字母按次数push进结果数据中，如果0次的话不会push
		for(let i = 0; i < count[key]; i++) {
			res.push(key)
		}
	})
	return res;
};
// @lc code=end

