class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let n = nums.length;
        let result = new Array(n).fill(1);// result = [1,1,1,1]

        let prefix = 1;

        for(let i = 0 ; i< n ; i++){
            result[i] = prefix;
            prefix *= nums[i]
        }

        let suffix = 1;

        for(let i = n -1 ; i >= 0; i--){
            result[i] *= suffix;
            suffix *= nums[i]
        }
        return result;
    }
}
