class TimeMap {
    constructor() {
        this.map = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if(!this.map.has(key)){
            this.map.set(key,[])
        }
        this.map.get(key).push([timestamp,value])
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        if(!this.map.has(key)){
            return ""
        }

        const arr = this.map.get(key)

        let l = 0;
        let r = arr.length - 1;
        let res = ""

        while(l <= r){
            let mid = Math.floor((l + r) / 2);

            if(arr[mid][0] <= timestamp){
                res = arr[mid][1];
                l = mid + 1;
            }else{
                r = mid - 1
            }
        }
        return res;
    }
}
