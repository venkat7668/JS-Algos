function reverseNum(num) {
    let result = 0, rem;
    while (num) {
        rem = num % 10;
        result = result * 10 + rem;
        num = Math.floor(num / 10);
    }
    return result;
}

console.log(reverseNum(123))