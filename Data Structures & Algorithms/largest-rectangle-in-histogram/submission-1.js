class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
       let stack = [];
       let maxArea = 0;

       heights.push(0);

       for(let i = 0; i < heights.length ; i++){
        while(stack.length && 
                heights[i] < heights[stack[stack.length - 1]]){
                    let height = heights[stack.pop()]
                    let left = stack.length 
                    ? stack[stack.length - 1]
                    : -1;

                    let width = i - left - 1;

                    maxArea = Math.max(maxArea,height * width)
                }
                stack.push(i)
       }
       return maxArea
    }
}




