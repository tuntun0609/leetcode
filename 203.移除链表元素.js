/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
	if (head === null) {
		return head;
	}
	head.next = removeElements(head.next, val);
	return head.val === val ? head.next : head;

	// 方法2
	// const dummyHead = new ListNode(0);
	// dummyHead.next = head;
	// let temp = dummyHead;
	// while (temp.next !== null) {
	// 	if (temp.next.val == val) {
	// 		temp.next = temp.next.next;
	// 	} else {
	// 		temp = temp.next;
	// 	}
	// }
	// return dummyHead.next;
};
// @lc code=end

