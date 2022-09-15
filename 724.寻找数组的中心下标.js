/*
 * @lc app=leetcode.cn id=724 lang=javascript
 *
 * [724] 寻找数组的中心下标
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
	let sum = nums.reduce((sum, value) => sum + value, 0);
  let leftSum = 0;
  return nums.findIndex(item => {
    if(sum - 2 * leftSum === item) return true;
    leftSum += item;
  })
};
// @lc code=end

