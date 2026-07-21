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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    merge(list1,list2){
        let dummy  = new ListNode();
        let tail = dummy 

        while(list1 && list2){
            if(list1.val <= list2.val){
                tail.next = list1;
                list1 = list1.next;
            }else{
                tail.next = list2;
                list2 = list2.next;
            }
            tail = tail.next;
        }
        tail.next = list1 || list2

        return dummy.next;
    }

    mergeKLists(lists){
        while(lists.length > 1){
            let mergedLists = [];

            for(let i = 0; i < lists.length ; i +=2){
                let l1 = lists[i];
                let l2 = lists[i + 1] || null

                mergedLists.push(this.merge(l1,l2));
            }
            lists = mergedLists;
        }
        return lists[0] || null
    }
}
