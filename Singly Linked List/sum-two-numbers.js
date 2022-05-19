
const LinkedList = require("./linked-list");
/*
 * You are given two non-empty linked lists representing two non-negative integers.
 * The digits are stored in reverse order, and each of their nodes contains a single digit.
 * Add the two numbers and return the sum as a linked list. 
 * 
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 * 
 * Input: l1 = [2,4,3], l2 = [5,6,4]
 * Output: [7,0,8]
 * Explanation: 342 + 465 = 807.
*/

function addTwoNumbers(l1, l2) {
    const dummyList = new LinkedList();
    let p = l1, q = l2, carry = 0;

    while (p != null || q != null) {
        p.data = p.data != null ? p.data : 0;
        q.data = q.data != null ? q.data : 0;

        let sum = carry + p.data + q.data;
        console.log(sum, carry)
        carry = Math.floor(sum / 10);

        dummyList.push(sum % 10);
        p = p.next;
        q = q.next;
    }
    return dummyList;
}

/*Testing*/

const num1 = [2, 4, 3]
const num2 = [5, 6, 4]

const l1 = new LinkedList();
const l2 = new LinkedList();

num1.forEach((i) => l1.push(i))
num2.forEach((i) => l2.push(i))

const res = addTwoNumbers(l1.head, l2.head);
console.log(res);