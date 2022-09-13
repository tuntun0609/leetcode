/*
 * @lc app=leetcode.cn id=530 lang=javascript
 *
 * [530] 二叉搜索树的最小绝对差
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
var getMinimumDifference = function(root) {
	const dfs = (node, cb) => {
		if (node === null) {
			return;
		}
		dfs(node.left, cb);
		cb(node.val);
		dfs(node.right, cb);
	}
	const val = [];
	dfs(root, (value) => {
		val.push(value);
	})
	let res = Number.MAX_VALUE;
	for (let i = 0; i < val.length - 1; i++) {
		const diff = val[i + 1] - val[i];
		if (diff < res) {
			res = diff;
		}
	}
	return res;
};
// @lc code=end

