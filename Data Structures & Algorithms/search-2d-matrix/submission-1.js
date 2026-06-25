class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {

        if(!matrix || matrix.length == 0) return false;

        const m = matrix.length;//row count
        const n = matrix[0].length;//column count

        let left = 0;
        let right = m * n - 1; //2d array into 1d 

        while(left <= right){
            const mid = Math.floor((left + right) / 2);

            const row = Math.floor(mid / n);
            const col = mid % n;

            const value = matrix[row][col]
            
                if(value === target) return true;

                else if (value < target) left = mid + 1;
                else right = mid - 1;
            
        }
        return false;
    }
}








