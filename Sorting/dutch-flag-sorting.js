/* This algorithm sorts 0 1 2 numbers */

function sortItUp(ar) {
    let i = 0,
        l = 0,
        r = ar.length;
    while (l <= r) {
        switch (ar[i]) {
            case 2:
                // if current element ar[i] is 2 
                // swap with ar[r] and replace ar[r] with 2
                // decrease r-- (right bound)
                ar[i] = ar[r]
                ar[r] = 2
                r--;
                break;
            case 1:
                // if ar[i] is 1 increase i++
                i++
                break;
            default:
                // case zero
                // if ar[i] is zero swap with ar[l] (left bound)
                // and replace with ar[l] with zero
                // increase l (left-bound) and current i value by one
                ar[i] = ar[l];
                ar[l] = 0;
                l++
                i++
                break
        }
    }
    return ar
}

console.log(sortItUp([2, 1, 0, 2, 1, 0, 2, 1, 0, 2, 1, 0, 2, 1, 0]));