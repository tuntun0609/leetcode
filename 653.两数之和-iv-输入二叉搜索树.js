/*
 * @lc app=leetcode.cn id=653 lang=javascript
 *
 * [653] 两数之和 IV - 输入二叉搜索树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
	const set = new Set();
	const helper = (node, k) => {
		if (!node) {
			return false;
		}
		if (set.has(k - node.val)) {
			return true;
		}
		set.add(node.val);
		return helper(node.left, k) || helper(node.right, k);
	};
	return helper(root, k);
};
// @lc code=end

