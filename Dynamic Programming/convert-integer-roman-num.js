function convertIntToRomanNum(str) {
    let num = numMap(str.charAt(0));

    for (let i = 1; i < str.length; i++) {
        let cur = numMap(str.charAt(i)),
            prev = numMap(str.charAt(i - 1));

        if (prev >= cur) {
            num += cur;
        } else {
            num = num + cur - 2 * prev;
        }
    }

    return num;
}
function numMap(char) {
    const map = {
        i: 1,
        V: 5,
        x: 10,
        l: 50,
        c: 100,
        d: 500,
        m: 1000
    }
    return map[char];
}

console.log(convertIntToRomanNum('xx'))
