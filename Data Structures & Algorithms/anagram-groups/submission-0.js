class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = new Map()

        for(let i = 0 ; i < strs.length ;i++){
            let key = strs[i].split("").sort().join("")

            if(!map.has(key)){
                map.set(key,[])
            }
                map.get(key).push(strs[i])//map.get("act").push("act") , map = { act: ["act"] }
        }
        return Array.from(map.values())
    }
}
