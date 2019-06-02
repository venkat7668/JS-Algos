function flattenArray(arr) {
    if (!Array.isArray(arr)) {
        return [arr]
    }

    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result = result.concat(flattenArray(arr[i]))
    }
    return result;
}

/* version 2 */
function flattenArray_v2(arr) {
    let result = [];

    function helper(a, r) {
        for (let i = 0; i < a.length; i++) {
            if (Array.isArray(a[i])) {
                helper(a[i], r)
            } else {
                r.push(a[i])
            }
        }
    }

    helper(arr, result);
    return result;

}

/* version 3 */

function flattenArray_3(arr) {
    /* NOTE: THIS WORKS ONLY IN LATEST BROWSERS/NODE VERSION */
    return arr.flat(Infinity);
}


console.log(flattenArray_v2([1,[2,[3,[4]]]]));