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
     * @return {number}
     */
    diameterOfBinaryTree(root) {
        let maxDiameter = 0;

        function dfs(node){
            if(node === null){
                return 0
            }

            const leftHeight = dfs(node.left);
            const rightHeight = dfs(node.right);

            const diameter = leftHeight + rightHeight

            maxDiameter = Math.max(maxDiameter,diameter);

            return Math.max(leftHeight,rightHeight) + 1
        }
        dfs(root);

        return maxDiameter

        
    }
}


