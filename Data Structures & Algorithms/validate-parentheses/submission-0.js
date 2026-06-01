class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
       const stack = [];
       const map = {
        ")" : "(",
        "]" : "[",
        "}" : "{"
       }

       for(let char of s){
        if(char === "(" || char === "[" || char==="{"){
            stack.push(char)
        }else{
            if(stack.length === 0){
                return false;
            }

            if(stack.pop() !== map[char]){
                return false
            }
        }
       }
       return stack.length === 0;
    }
}
