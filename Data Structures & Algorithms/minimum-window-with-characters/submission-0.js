class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) { 
        const need = {};

        for(let char of t){
            need[char] = (need[char] || 0) + 1;
        }

        let window={};
        let left = 0;
        let have = 0;
        let needCount = Object.keys(need).length;

        let result = [-1,-1];
        let minLength = Infinity;

        for(let right = 0; right < s.length; right++){

            let char = s[right];

            window[char] = (window[char] || 0) + 1;

            if(need[char] && window[char] === need[char]){
                have++
            }

            while(have === needCount){

                let windowLength = right - left + 1;

                if(windowLength < minLength){
                    minLength = windowLength
                    result = [left,right]
                }
                window[s[left]]--

                if(need[s[left]] && window[s[left]] < need[s[left]]){
                    have--
                }
                left++
            }
        }
        if(minLength === Infinity) return "";

        let[start,end] = result;
        return s.slice(start,end + 1)

    }
}
