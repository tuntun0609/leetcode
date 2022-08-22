/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
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
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
	const temp = [];
	while(head !== null) {
		temp.push(head.val);
		head = head.next;
	}
	for (let i = 0, j = temp.length - 1; i < j; i++, j--) {
		if (temp[i] !== temp[j]) {
			return false
		}
	}
	return true;
};
// @lc code=end

