/*
 * @lc app=leetcode.cn id=590 lang=javascript
 *
 * [590] N 叉树的后序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var postorder = function(root) {
	const res = [];
	const postorderTree = (node) => {
		if (node === null) {
			return;
		}
		node.children.forEach(item => {
			postorderTree(item);
		});
		res.push(node.val);
	}
	postorderTree(root);
	return res;
};
// @lc code=end

