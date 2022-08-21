
/*
    @Author: Venkat Lankalapalli
    @Date: Aug 20 2022

    Impliment a function to genarte binary numbers 1 to n
    genBinNumbers(n)
*/

const Queue = require("./two-stacks-queue-impl").TwoStacksQueue

function genBinNumbers(n) {
    let result = [];
    let q = new Queue();
    q.enQueue("1");
    let s1, s2;
    for (let i = 0; i < n; i++) {
        let num = q.deQueue()
        s1 = num + "0"
        s2 = num + "1"
        q.enQueue(s1)
        q.enQueue(s2)
        result.push(num)
    }
    return result;
}

console.log("Result: ", genBinNumbers(3))


/* 
default 
queue = ['1']

n = 1
result = ["1"]
queue  = [ '10', '11']

n = 2 
result = ["1", "10"]
queue  = ['11', "100", "101"]

n = 3
result = ["1", "10", "11"]
queue  = ["100", "101", '110', '111']

*/

