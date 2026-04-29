class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let set = new Set(nums);
        let maxLen = 0; 

        for(let num of nums){

            if(!set.has(num - 1)){//set = {100, 4, 200, 1, 3, 2}
                let current = num
                let length = 1;

                while (set.has(current + 1)){
                    current++;
                    length++
                }
                maxLen = Math.max(maxLen,length)
            }
        }
        return maxLen
    }
}
