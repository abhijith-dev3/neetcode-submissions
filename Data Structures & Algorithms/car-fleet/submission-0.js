class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {

        const cars = position.map((p,i) => [p,speed[i]]);

        cars.sort((a,b) => b[0] - a[0]);

        let fleets = 0;
        let maxTime = 0;

        for(let [pos,spd] of cars){
            let time = (target - pos)/spd;

            if(time > maxTime){
                fleets++
                maxTime = time;
            }
        }
        return fleets;
    }
}









