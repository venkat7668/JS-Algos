exports.findThreeLargestNumbers = function (arr) {
    let one = Number.NEGATIVE_INFINITY;
    let two = Number.NEGATIVE_INFINITY;
    let three = Number.NEGATIVE_INFINITY;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > one) {
            three = two;
            two = one;
            one = arr[i];
        } else if (arr[i] > two && arr[i] != one) {
            three = two;
            two = arr[i];
        } else if (arr[i] > three && arr[i] != one && arr[i] != two) {
            three = arr[i]
        }
    }

    return [one, two, three]
}