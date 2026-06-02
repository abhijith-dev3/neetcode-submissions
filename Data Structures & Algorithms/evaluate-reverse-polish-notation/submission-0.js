class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        
        let stack = [];

        for(let s of tokens){
           if( s === "+"){
            const b = stack.pop();
            const a = stack.pop()
            stack.push(a + b)
           }

           else if( s === "-"){
            const b = stack.pop();
            const a = stack.pop();
            stack.push( a - b)
           }
           else if( s === "*"){
            const b = stack.pop();
            const a = stack.pop();
            stack.push( a * b);
           }
           else if(s === "/"){
            const b = stack.pop();
            const a = stack.pop();
            stack.push(Math.trunc(a/b))
           }
           else{
            stack.push(Number(s))
           }
        }
        return stack[0]

    }
}
