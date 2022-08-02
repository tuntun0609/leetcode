/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function(nums) {
	let numSet = new Set();
	for (let i = 0; i < nums.length; i++) {
		let item = nums[i];
		if (numSet.has(item)) {
			return item
		} else {
			numSet.add(item);
		}
	}
};

console.log(findRepeatNumber([2, 3, 1, 0, 2, 5, 3]));