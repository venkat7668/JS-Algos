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