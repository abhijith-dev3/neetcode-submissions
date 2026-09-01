/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isBalanced(root) {

        function dfs(node){
            if(node === null){
                return -1;
            }

            const leftHeight = dfs(node.left);
            
            if(leftHeight === -2){
                return -2
            }

            const rightHeight = dfs(node.right);
            if(rightHeight === -2){
                return -2
            }

            if(Math.abs(leftHeight - rightHeight) > 1){
                return -2;
            }

            return Math.max(leftHeight,rightHeight) + 1
        }

        return dfs(root) !== -2


    }
}
