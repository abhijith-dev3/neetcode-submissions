class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let left = 0; 
        let right = s.length - 1;

        while (left < right){
            while(left < right && !isAlphaNum(s[left])){ // if it not a letter/number left++ next chara or number
                left++
            }

            while(left < right && !isAlphaNum(s[right])){
                right--
            }

            if(s[left].toLowerCase() !== s[right].toLowerCase()){
                return false;
            }
            left++
            right--
        }
        return true;
    }   
}
function isAlphaNum(c){
        return /[a-z0-9]/i.test(c)}