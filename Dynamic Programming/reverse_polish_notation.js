/*
 * @Author: mikey.zhaopeng 
 * @Date: 2019-11-22 16:39:36 
 * @Last Modified by: Venkat Lankalapalli
 * @Last Modified time: 2019-11-26 15:41:37
 * https://en.wikipedia.org/wiki/Reverse_Polish_notation
 */
function reversePolishNotation(arr) {
    let cache = [];
    let isDigit = /\d/;
    for (let i = 0; i < arr.length; i++) {
        if (isDigit.test(arr[i])) {
            cache.push(arr[i]);
        } else {
            let a = cache.pop();
            let b = cache.pop();
            let newVal = doOperation(a, b, arr[i]);
            cache.push(newVal);
        }
    }

    return cache[0];
}

function doOperation(a, b, operator) {
    result = 0;
    switch (operator) {
        case '+':
            result = a + b;
            break;
        case '-':
            result = a - b;
            break;
        case '/':
            result = a / b;
            break;
        case '*':
            result = a * b;
            break
    }
    return result;
}

console.log(reversePolishNotation([15, 7, 1, 1, '+', '-', '/', 3, '*', 2, 1, 1, '+', '+', '-']));