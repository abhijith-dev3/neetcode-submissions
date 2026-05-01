class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

        let map = new Map();

        for(let i = 0 ; i < nums.length ; i++){
            let needed = target - nums[i];

            if(map.has(needed)){
                return [map.get(needed),i]
            }else{
                map.set(nums[i],i)
            }
        }
    }
}


















const twoSum = function(nums,target){
    let map = new Map();

    for(let i = 0 ;i < nums.length; i++){
        let needed = target - nums[i]

        if(map.has(needed)){
            
        }
    }
}










