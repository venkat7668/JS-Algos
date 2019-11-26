/*
 * @Author: Venkat Lankalapalli 
 * @Date: 2019-11-26 15:44:58 
 * @Last Modified by: Venkat Lankalapalli
 * @Last Modified time: 2019-11-26 15:46:45
 */

function isBalacedPrantheses(str) {
    const strAr = str.split('');
    let stack = [];
    for (let i = 0; i < strAr.length; i++) {
        let char = strAr[i]
        if (isPrantheses(char)) {
            if (isOpenPerantheses(char)) {
                stack.push(char);
            } else {
                let top = stack.pop();
                if (getCounterPrantheses(top) != char) {
                    return false;
                }
            }
        }
    }
    return stack.length == 0;
}

function getCounterPrantheses(char) {
    return { '{': '}', '(': ')', '[': ']' }[char];
}

function isPrantheses(char) {
    return /[{}[\]()]/.test(char);
}

function isOpenPerantheses(char) {
    return /[[{(]/.test(char);
}

console.log(isBalacedPrantheses("[()()()]({})"))