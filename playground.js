/* this file for partice */

/* two sum 
 * #1 with sorted array
 * #2 non sorted array
 * 
*/

function sortedArray2sum(ar, target) {
    let i = 0;
    let j = ar.length - 1;
    let sum;
    while (i < j) {
        sum = ar[i] + ar[j];
        if (sum == target) {
            return [ar[i], ar[j]]
        } else if (sum > target) {
            j--
        } else {
            i++
        }
    }
    return [-1 - 1]
}

//console.log(sortedArray2sum([2,3,5,8,9,12], 8))

function unsortedArr2sum(ar, target) {
    let cache = {}
    for (let i = 0; i < ar.length; i++) {
        if (cache[target - ar[i]]) {
            return [target - ar[i], ar[i]]
        } else {
            cache[ar[i]] = i;
        }
    }
    return [-1, -1]
}

//console.log(unsortedArr2sum([2, 3, 5, 8, 9, 12], 8))
/*************************************************************************/

function genTable(rows, cols) {

    // genTable(4, 5)
    //[ 
    //     [ 1, 5, 9, 13, 17 ],
    //     [ 2, 6, 10, 14, 18 ],
    //     [ 3, 7, 11, 15, 19 ],
    //     [ 4, 8, 12, 16, 20 ]
    // ]
    let result = [];
    let cell = 1;
    for (let row = 0; row < rows; row++) {
        result.push([])
    }
    for (let col = 0; col < cols; col++) {
        for (let row = 0; row < rows; row++) {
            result[row][col] = cell++
        }
    }
    return result;
}

//console.log(genTable(4, 5))

function findSubstrWithAllchars(str) {
    let i = 0,
        j = 0,
        cache = {},
        max = 0;
    while (j < str.length) {
        if (cache[str[j]] != undefined) {
            i = Math.max(i, cache[str[j]] + 1);
        }
        cache[str[j]] = j;
        max = Math.max(max, j - i + 1)
        j++
    }
    return max;
}
//console.log(findSubstrWithAllchars('abcabdacbd'))

function findElsToformAstr(ar, str) {
    let cache = {};
    let result = [];
    for (let i = 0; i < ar.length; i++) {
        cache[sort(ar[i])] = i
    }

    let i = 0,
        j = 1;
    while (j <= str.length) {
        let substr = sort(str.substring(i, j))
        //console.log(substr)
        if (cache[substr] != undefined) {
            result.push(cache[substr]);
            i = j
            j++
        } else {
            j++
        }
    }
    return result;
}

function sort(str) {
    return str.split('').sort().join('');
}

function removeSubstrKeys(str, obj) {
    let i = 0,
        j = 1;
    console.log(str)
    while (j <= str.length) {
        if (obj[sort(str.substring(i, j))] != undefined) {
            //obj[sort(str.substring(i, j))] = undefined
        }
        j++
    }
}

//console.log(findElsToformAstr(["ve", "at", "vn", "tak", "nev", "kn"], "venkat"))
//console.log(findElsToformAstr(["sa", "mb", "tak", "a"], "samba"))

function duchFlagSort(ar) {
    let l = 0;
    let r = ar.length - 1;
}