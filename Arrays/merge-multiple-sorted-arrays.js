function mergeSortArrays(arrs, result) {
    if (!result && arrs.length) {
        result = arrs.splice(0, 1)[0];
    }

    if (!arrs.length) {
        return result;
    }

    let ar = arrs.splice(0, 1)[0];
    let mergedArr = merge(result, ar)

    return mergeSortArrays(arrs, mergedArr);
}

function merge(arr1, arr2) {
    let i = 0;
    let j = 0;
    let result = [];
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j])
            j++;
        }
    }
    return result.concat(arr1.slice(i)).concat(arr2.slice(j));
}

console.log(mergeSortArrays([[1, 2, 3, 7], [4, 5, 6, 20], [4, 5, 6, 7, 8, 9, 10]]));