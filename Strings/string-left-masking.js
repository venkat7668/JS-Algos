/*
 * @Author: Venkat Lankalapalli 
 * @Date: 2021-02-26 10:39:01 
 * @Last Modified by: Venkat Lankalapalli
 * @Last Modified time: 2021-02-27 15:43:43
 * 
 * Challenge: String left masking to spcified number of chars
 * @param str           : Original string that needs to be masked
 * @param visibleStrLen : Number of chars visible at the end of the string
 * @param maskChar      : Mask char default asterisk, can be modified
 */

function maskString(str, visibleStrLen = 6, maskChar = '*') {
    return [
        new Array(str.length - visibleStrLen).join(maskChar),
        str.slice(visibleStrLen * -1)
    ].join('')
}

console.log(maskString('myprivateemailid@gmail.com', 12))
//output : *************id@gmail.com