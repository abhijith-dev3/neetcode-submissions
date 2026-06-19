class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {

        if(nums1.length > nums2.length){
            [nums1,nums2] = [nums2, nums1];
        }

        let A = nums1;
        let B = nums2
        let total = A.length + B.length;
        let half = Math.floor(total/2);

        let l = 0;
        let r = A.length -1;

        while(true){
            let i = Math.floor((l + r) / 2)
            let j = half - i - 2;

            let Aleft = i >= 0 ? A[i] : -Infinity
            let Aright = (i + 1) < A.length ? A[i + 1] : Infinity

            let Bleft = j >= 0 ? B[j] : -Infinity
            let Bright = (j + 1) < B.length ? B[j + 1] : Infinity

            if(Aleft <= Bright && Bleft <= Aright){

                if(total % 2){
                    return Math.min(Aright,Bright);
                }

                return(Math.max(Aleft,Bleft) + Math.min(Aright , Bright)) / 2
            }else if (Aleft > Bright){
                r = i - 1;
            }else{
                l = i + 1;
            }
        }
    }
}
