/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} k
     * @return {ListNode}
     */
    reverseKGroup(head, k) {
        const dummy = new ListNode(0);
        dummy.next = head;

        let groupPrev = dummy;

        while(true){

        let kth = groupPrev;

        for(let i = 0; i < k ; i++){

            if(kth.next === null){
                return dummy.next;
            }
            kth = kth.next;
        }

        let groupNext = kth.next;

        let prev = groupNext;
        let curr = groupPrev.next;

       while(curr !== groupNext){
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
       }

       let temp = groupPrev.next;
       groupPrev.next = prev;

       groupPrev = temp;

       }

    }
}
