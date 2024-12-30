/*
 * @lc app=leetcode.cn id=1367 lang=typescript
 * @lcpr version=30204
 *
 * [1367] 二叉树中的链表
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function isSubPath(head: ListNode | null, root: TreeNode | null): boolean {
  if (root === null) {
    return false
  }
  return (
    dfs(root, head) || isSubPath(head, root.left) || isSubPath(head, root.right)
  )
}

function dfs(rt: TreeNode | null, head: ListNode | null): boolean {
  // 链表已经全部匹配完，匹配成功
  if (head === null) {
    return true
  }
  // 二叉树访问到了空节点，匹配失败
  if (rt === null) {
    return false
  }
  // 当前匹配的二叉树上节点的值与链表节点的值不相等，匹配失败
  if (rt.val !== head.val) {
    return false
  }
  return dfs(rt.left, head.next) || dfs(rt.right, head.next)
}
// @lc code=end

/*
// @lcpr case=start
// [4,2,8]\n[1,4,4,null,2,2,null,1,null,6,8,null,null,null,null,1,3]\n
// @lcpr case=end

// @lcpr case=start
// [1,4,2,6]\n[1,4,4,null,2,2,null,1,null,6,8,null,null,null,null,1,3]\n
// @lcpr case=end

// @lcpr case=start
// [1,4,2,6,8]\n[1,4,4,null,2,2,null,1,null,6,8,null,null,null,null,1,3]\n
// @lcpr case=end

 */
