/*
 * @Author: Venkat Lankalapalli 
 * @Date: 2019-11-26 15:44:29 
 * @Last Modified by:   Venkat Lankalapalli 
 * @Last Modified time: 2019-11-26 15:44:29 
 */

function romanToInteger(str) {
    str = str.toLowerCase();
    let num = numMap(str.charAt(0));

    for (let i = 1; i < str.length; i++) {
        let cur = numMap(str.charAt(i)),
            prev = numMap(str.charAt(i - 1));

        if (prev >= cur) {
            num += cur;
        } else {
            // if previous char is lessthen current value remove twise as added previous 
            num = num + cur - 2 * prev;
        }
    }

    return num;
}
function numMap(char) {
    const map = {
        i: 1,
        v: 5,
        x: 10,
        l: 50,
        c: 100,
        d: 500,
        m: 1000
    }
    return map[char];
}

console.log(romanToInteger('CCV'))
