/*
 * @Author: Venkat Lankalapalli 
 * @Date: 2021-03-01 08:52:32 
 * @Last Modified by:   Venkat Lankalapalli 
 * @Last Modified time: 2021-03-01 08:52:32 
 */

function stringLeftPad(str, len, char = "*") {
    const diff = len - str.length;
    if (diff <= 0) return str;

    let i = 0;
    while (i++ < diff) {
        str = char + str;
    }

    return str;
}

console.log(stringLeftPad("venkat", 10))