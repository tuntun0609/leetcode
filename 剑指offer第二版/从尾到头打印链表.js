/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function(head) {
	if (!head) {
		return []
	}
	let arr = [];
	let mark = head;
	while(mark) {
		arr.push(mark.val);
		mark = mark.next;
	}
	return arr.reverse()
};