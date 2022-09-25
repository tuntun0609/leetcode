/*
 * @lc app=leetcode.cn id=559 lang=javascript
 *
 * [559] N 叉树的最大深度
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
 * @return {number}
 */
var maxDepth = function(root) {
	if (!root) {
		return 0;
	}
	let maxChildDepth = 0;
	const children = root.children;
	for (const child of children) {
		const childDepth = maxDepth(child);
		maxChildDepth = Math.max(maxChildDepth, childDepth);
	}
	return maxChildDepth + 1;
};
// @lc code=end

