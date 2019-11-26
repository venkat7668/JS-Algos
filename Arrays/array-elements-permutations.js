/*
 * @Author: Venkat Lankalapalli 
 * @Date: 2019-11-26 15:42:23 
 * @Last Modified by:   Venkat Lankalapalli 
 * @Last Modified time: 2019-11-26 15:42:23 
 */

function permutations(arr, result=[]) {
    if (!arr.length) {
        console.log(result)
    }

    for (let i = 0; i < arr.length; i++) {
        let rem = [...arr.slice(0, i), ...arr.slice(i + 1)];
        permutations(rem, [...result, arr[i]]);
    }
}

permutations([1, 2, 3]);
