function maxProductTriplet(arr) {
    let maxA = Number.MIN_VALUE;
    let maxB = Number.MIN_VALUE;
    let maxC = Number.MIN_VALUE;

    let minA = Number.MIN_VALUE;
    let minB = Number.MIN_VALUE;

    let len = arr.length;
    while (len) {
        let num = arr[len - 1]
        // find max 3 nums in an array
        if (num > maxA) {
            maxB = maxA;
            maxC = maxB;
            maxA = num
        } else if (num > maxB) {
            maxC = maxB
            maxB = num;
        } else if (num > maxC) {
            maxC = num;
        }

        //find min 2 nums in an array
        if (num < minA) {
            minB = minA;
            minA = num;
        } else if (num < minB) {
            minB = num;
        }
        len--
    }
        console.log(maxA , maxB , maxC, minA , minB)

        return Math.max(maxA * maxB * maxC, minA * minB * maxA);
}

console.log(maxProductTriplet([-10, -3, 5, 6, -20]))