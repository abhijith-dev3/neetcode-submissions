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
     * @return {void}
     */
    reorderList(head) {
        if(!head || !head.next) return;

        let slow = head;
        let fast = head;

        while(fast.next && fast.next.next){
            slow = slow.next;
            fast = fast.next.next;
        }
        let second = slow.next; //4
        slow.next = null // null

        let prev = null;

        while(second){
            let next = second.next;  //next  = 5         // next = null
            second.next = prev;   // 4.next = prev; which is 4 => null            // 5 => 4 => null
            prev = second;  // prev = 4 => null   // prev = 5 => 4 => null
            second = next; // second = 5  // second => next;
        }

        let first = head;
        second = prev;

        while(second){
            let temp1 = first.next; // temp1 = 2
            let temp2 = second.next; // temp2 = 4

            first.next = second; // 1.next = 5
            second.next = temp1; // 5.next =  2

            first = temp1; // first = 2
            second = temp2; // second = 4
        }
    }
}
