/*
    @Author: Venkat Lankalapalli
    @Date: Aug 21 2022
    
    Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

    Implement the MinStack class:
    MinStack() initializes the stack object.
    void push(int val) pushes the element val onto the stack.
    void pop() removes the element on the top of the stack.
    int top() gets the top element of the stack.
    int getMin() retrieves the minimum element in the stack.
    You must implement a solution with O(1) time complexity for each function.
*/
class MinStack {
    constructor() {
        this.stack = []
        this.minStack = []
    }

    push(n) {
        if (!this.stack.length) {
            this.minStack.push(n)
        } else {
            //push min of current min and current push value
            let minTopIndex = this.minStack.length - 1;
            this.minStack.push(Math.min(
                this.minStack[minTopIndex], n
            ))
        }
        this.stack.push(n)
    }

    pop() {
        this.minStack.pop()
        this.stack.pop()
    }

    top() {
        return this.stack[this.stack.length - 1]
    }
    min() {
        return this.minStack[this.stack.length - 1]
    }
}

let ms = new MinStack()
ms.push(4)
ms.push(2)
ms.push(1)
console.log(ms.min())
ms.pop()
console.log(ms.min())
ms.pop()
console.log(ms.min())