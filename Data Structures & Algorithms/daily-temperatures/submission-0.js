class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let stack = [];
        let result = new Array(temperatures.length).fill(0)

        for(let i = 0; i < temperatures.length ; i++){
            let temp = temperatures[i]

            while(stack.length > 0 && 
            temp > stack[stack.length - 1][0]){
                let [, prevIndex] = stack.pop()
                result[prevIndex] = i - prevIndex;
            }
            stack.push([temp,i])
        }
        return result;
        
    }
}
