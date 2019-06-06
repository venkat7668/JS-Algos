exports.mergeSort = function (arr) {
    if (arr.length < 2) {
        return arr;
    }

    let mid = Math.floor(arr.length / 2);
    let leftAr = arr.slice(0, mid);
    let rightAr = arr.slice(mid);

    return mergeSortedArrays(mergeSort(leftAr), mergeSort(rightAr))
}

function mergeSortedArrays(leftAr, rightAr) {

    let result = [],
        i = 0,
        j = 0;

    while (i < leftAr.length && j < rightAr.length) {
        if (leftAr[i] < rightAr[j]) {
            result.push(leftAr[i])
            i++
        } else {
            result.push(rightAr[j]);
            j++
        }
    }
    result.push(...leftAr.slice(i), ...rightAr.slice(j));

    return result;
}