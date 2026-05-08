class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0 ; 
        let right = heights.length - 1;
        let max = 0;

        while(left < right){
            let width = right - left;
            let height = Math.min(heights[left], heights[right])
            let area = width * height;

            max = Math.max(max,area)

            if(heights[left] < heights[right]){
                left++
            }else{
                right--;
            }
        }
        return max
    }
}
