/*
 * @lc app=leetcode.cn id=501 lang=javascript
 *
 * [501] 二叉搜索树中的众数
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
 * @return {number[]}
 */
var findMode = function (root) {
	const dfs = (node, cb) => {
		if (!node) {
			return;
		}
		dfs(node.left, cb);
		main(node);
		dfs(node.right, cb);
	};

	let nowNodeVal = 0;
	let nowCount = 0;
	let maxCount = 0;
	let res = [];

	const main = (node) => {
		if (node.val === nowNodeVal) {
			nowCount++;
		} else {
			nowCount = 1;
			nowNodeVal = node.val;
		}
		if (nowCount === maxCount) {
			res.push(nowNodeVal);
		} else if (nowCount > maxCount) {
			maxCount = nowCount;
			res = [nowNodeVal];
		}
	}

	dfs(root, main);
	return res;
};
// @lc code=end
