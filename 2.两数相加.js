/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
	let addOne = 0;
	let head = null;
	let mark = null;
	while(l1 || l2) {
		let val1 = l1 ? l1.val : 0;
		let val2 = l2 ? l2.val : 0;
		const sum = val1 + val2 + addOne;
		if (!head) {
			head = mark = new ListNode(sum % 10);
		} else {
			mark.next = new ListNode(sum % 10);
			mark = mark.next;	
		}
		addOne = Math.floor(sum / 10);
		if (l1) {
			l1 = l1.next;
		}
		if (l2) {
			l2 = l2.next;
		}
 	}
	if (addOne > 0) {
		mark.next = new ListNode(addOne);
	}
	return head;
};
// @lc code=end

