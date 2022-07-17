/*
 * Problem: Get max lenth of the unique chars substring in a sting
 * @input  : string
 * @output : int
 * 
 * Example : getUniqueCharsLen("abbcdaaefghi") => 4
 * "bcda" is unique chars length => 4
*/

function getUniqueCharsLen(str) {
    let cache = {},
        i = 0,
        j = 0,
        max = 0;
    while (j < str.length) {
        /* store each char last index in a cache, 
        and look if it is already in the cache*/
        if (cache[str[j]] != undefined) { //0 is false
            i = Math.max(i, cache[str[j]] + 1)
        }
        cache[str[j]] = j;
        max = Math.max(max, j - i + 1)
        j++
    }
    return max;
}

console.log(getUniqueCharsLen("abbcda"))