function mergeSortArrays(arrs) {

    if (arrs.length == 1) {
        //base case #1: length == 1 return first array
        return arrs.shift()
    }

    return merge(arrs.shift(), mergeSortArrays(arrs));

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

console.log(mergeSortArrays([[1, 2, 3, 7], [4, 5, 6, 20], [4, 5, 6, 7, 8, 9, 10], [0, 1], [-1, 21]]));