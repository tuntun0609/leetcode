/*
 * @lc app=leetcode.cn id=2264 lang=typescript
 * @lcpr version=30204
 *
 * [2264] 字符串中最大的 3 位相同数字
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function largestGoodInteger(num: string): string {
  let res = ''
  for (let i = 0; i < num.length - 2; i++) {
    if (num[i] === num[i + 1] && num[i] === num[i + 2]) {
      if (res === '' || Number(num[i]) > Number(res[0])) {
        res = `${num[i]}${num[i]}${num[i]}`
      }
    }
  }
  return res
}
// @lc code=end

/*
// @lcpr case=start
// "6777133339"\n
// @lcpr case=end

// @lcpr case=start
// "2300019"\n
// @lcpr case=end

// @lcpr case=start
// "42352338"\n
// @lcpr case=end

 */
