class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {

        let need = {};
        let window = {};
        
        for(let ch of s1){
            need[ch] = (need[ch] || 0) + 1;
        }

        let required = Object.keys(need).length // which is 3
        let formed = 0;

        let left = 0;

        for(let right = 0; right <s2.length;right++){
            let ch = s2[right];

            window[ch] = (window[ch] || 0) + 1;

            if(need[ch] && window[ch] === need[ch]){
                formed++
            }

            if(right - left + 1 > s1.length){
                let leftChar = s2[left]

                if(need[leftChar] && window[leftChar] === need[leftChar]){
                    formed--;
                }
                window[leftChar]--;
                left++
            }

    if(formed === required) return true;
        }
          return false;
    }
  
}
