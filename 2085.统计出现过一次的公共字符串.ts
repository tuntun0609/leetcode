/*
 * @lc app=leetcode.cn id=2085 lang=typescript
 * @lcpr version=30204
 *
 * [2085] 统计出现过一次的公共字符串
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function countWords(words1: string[], words2: string[]): number {
  const map1 = new Map()
  const map2 = new Map()
  for (const word of words1) {
    map1.set(word, (map1.get(word) || 0) + 1)
  }
  for (const word of words2) {
    map2.set(word, (map2.get(word) || 0) + 1)
  }

  let count = 0
  for (const [key, value] of map1) {
    if (value === 1 && map2.get(key) === 1) {
      count++
    }
  }
  return count
}
// @lc code=end

/*
// @lcpr case=start
// ["leetcode","is","amazing","as","is"]\n["amazing","leetcode","is"]\n
// @lcpr case=end

// @lcpr case=start
// ["b","bb","bbb"]\n["a","aa","aaa"]\n
// @lcpr case=end

// @lcpr case=start
// ["a","ab"]\n["a","a","a","ab"]\n
// @lcpr case=end

 */
