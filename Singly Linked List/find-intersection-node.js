/* 
 * Problem : Find the intersection node of Y shaped linked list
 * Solution: 
 *  #1 Find two linked lists lengths separately 
 *  #2 Find the diffrence between 2 lengths 
 *  #3 Find the diff nth node of the longer linked list
 *  #4 Now you have same length linked lists to verify
 *  #5 Gothrough the linked list nodes and find the common node
 *  #6 And return the node data/value
 *
 * time complexity: O(M+N)
 * 
 * ____   ____             __            __     .__   
 * \   \ /   /____   ____ |  | _______ _/  |_   |  |  
 *  \   Y   // __ \ /    \|  |/ /\__  \\   __\  |  |  
 *   \     /\  ___/|   |  \    <  / __ \|  |    |  |__
 *    \___/  \___  >___|  /__|_ \(____  /__| /\ |____/
 *               \/     \/     \/     \/     \/       
 */

function findIntersectionNode(head1, head2) {
    const n1Len = getLength(head1);
    const n2Len = getLength(head2);
    let longList, shortList, diff, intersectionNode = null;

    if (n1Len > n2Len) {
        longList = head1;
        shortList = head2;
        diff = n1Len - n2Len;
    } else {
        longList = head2;
        shortList = head1;
        diff = n2Len - n1Len;
    }

    while (diff > 0) {
        longList = longList.next;
        diff--;
    }

    while (longList.next && shortList.next) {
        if (longList.next == shortList.next) {
            intersectionNode = longList.next;
            return
        }
    }
    return intersectionNode
}

function getLength(node) {
    let count = 0;
    while (node.next) {
        count++
    }
    return count
}