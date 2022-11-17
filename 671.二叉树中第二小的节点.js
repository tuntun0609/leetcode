/*
 * @lc app=leetcode.cn id=671 lang=javascript
 *
 * [671] 二叉树中第二小的节点
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
 * @return {number}
 */
var findSecondMinimumValue = function (root) {
	let ans = -1;
	const rootvalue = root.val;

	const dfs = (node) => {
		if (node === null) {
			return;
		}
		if (ans !== -1 && node.val >= ans) {
			return;
		}
		if (node.val > rootvalue) {
			ans = node.val;
		}
		dfs(node.left);
		dfs(node.right);
	};

	dfs(root);
	return ans;
};
// @lc code=end
