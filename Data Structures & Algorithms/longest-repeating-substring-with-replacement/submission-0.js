class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let count = {};
        let left = 0;
        let maxFreq = 0;
        let maxLen = 0;

        for(let right = 0; right < s.length; right++){

            count[s[right]] = (count[s[right]] || 0) + 1;

            maxFreq = Math.max(maxFreq,count[s[right]]);

            let windowSize = right - left + 1;

            while(windowSize - maxFreq > k){
                count[s[left]]--;//this remove left char from count

                left++

                windowSize = right - left + 1;
            }
            maxLen = Math.max(maxLen,windowSize);
        }
        return maxLen;
    }
}


