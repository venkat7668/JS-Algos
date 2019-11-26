/*
 * @Author: Venkat Lankalapalli
 * @Date: 2019-11-25 11:17:11 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2019-11-25 11:21:33
 * @disc: Detect given string can form a palindrome string
 * @Alogo: Count odd chars in a string, if odd chars are more than one.
 *         That string can't maka a palindrom
 */


function canFormPalindrome(str) {
    let obj = {};

    for (let i = 0; i < str.length; i++) {
        if (!obj[str[i]]) {
            obj[str[i]] = 1;
        } else {
            obj[str[i]]--
        }
    }

    odd = 0;
    for (let key in obj) {
        if (obj[key]) {
            odd++
        }
    }

    return odd <= 1;
}


console.log(isPermitationPalindrome('av'));