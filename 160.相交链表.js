/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
	let setA = new Set();
	let a = headA;
	while(a !== null) {
		setA.add(a);
		a = a.next;
	}
	let b = headB;
	while(b !== null) {
		if (setA.has(b)) {
			return b;
		}
		b = b.next;
	}
	return null;
};
// @lc code=end

