/*
 * @Author: Venkat Lankalapalli 
 * @Date: 2019-11-21 10:41:14 
 * @Last Modified by: Venkat Lankalapalli
 * @Last Modified time: 2019-11-26 15:41:16
 */

function uniqueCharsCount(str) {
    let obj = {};
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (!obj[str[i]]) {
            obj[str[i]] = 1;
            count++
        }
    }

    return count;
}

function findSubstringLen(str) {
    let allUniqueCharsCount = uniqueCharsCount(str);
    let min = 0;

    for (let i = 0; i < str.length + 1; i++) {
        for (let j = 0; j < i; j++) {
                let subStr = str.substring(i, j);
                let subStrMinLen = uniqueCharsCount(subStr);
                min = Math.max(min, subStrMinLen);
        }
    }

    return min;
}

console.log(findSubstringLen('abcdabcdef'));