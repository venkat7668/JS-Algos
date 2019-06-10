function getMissingTwoNums(arr) {
    let size = arr.length + 2;
    let actualTotal = size * (size + 1)/ 2;
    let arrayTotal = 0;

    for (let i = 0; i < arr.length; i++) {
        arrayTotal += arr[i]
    };

    console.log(arr.length, actualTotal, arrayTotal);

    let pivot = (actualTotal - arrayTotal)/2;
    let toatlLeftXor = 0;
    let arrLeftXor = 0;
    let totalRightXor = 0;
    let arrRightXor = 0;

    for (let i = 1; i <= pivot; i++) {
        toatlLeftXor ^= i
    }

    for (let i = pivot + 1; i <= size; i++) {
        totalRightXor ^= i
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= pivot) {
            arrLeftXor ^= arr[i]
        } else {
            arrRightXor ^= arr[i]
        }
    }
    return [toatlLeftXor ^ arrLeftXor, totalRightXor ^ arrRightXor];
}

console.log(getMissingTwoNums([2, 3, 1, 5, 7])) // [4,6]
