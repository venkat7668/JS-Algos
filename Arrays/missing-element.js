function missingElementV1(arr1, arr2) {
    let result = 0;
    for (let i = 0; i < arr1.length; i++) { result ^= arr1[i]; }
    for (let j = 0; j < arr2.length; j++) { result ^= arr2[j]; }
    return result;
}

function missingElementV2(left, right) {
    let cache = {};
    //let result = [];

    //if left array is smaller, swap the arrays
    if (left.length > right.length) {
        [left, right] = [right, left]
    }

    for (let i = 0; i < left.length; i++) {
        cache[left[i]] = 1;
    }

    for (let j = 0; j < right.length; j++) {
        if (!cache[right[j]]) {
            //result.push(arr2[j]);
            return right[j]
        }
    }

    //return result;
}


console.log(missingElementV2([2, 3, 4, 1, 5, 6, 7], [6, 1, 4, 2, 3, 5]));