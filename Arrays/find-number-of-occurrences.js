/*
 * Problem: find the number of occrrences of the given element in a sorted array
 * input: [1,2,4,4,4,5,6,7], 4
 * return 3 // 4 element appreas 3 times in the array
 *
 * Solution: find the given element index with the binarySearch
 *           check if same element in the left and right of the index
*/

function countElement(ar, el) {
    let ind = binarySearch(ar, el);
    if (ind == -1) {
        return 0;
    }
    let count = 1;
    let left = ind - 1;
    while (ar[left] == el) {
        count++
        left--
    }
    let right = ind + 1;
    while (ar[right] == el) {
        count++
        right++
    }
    return count;
}

function binarySearch(ar, el) {
    let l = 0,
        r = ar.length - 1,
        mid;

    while (l < r) {
        mid = Math.floor(l + (r - l) / 2);
        if (ar[mid] == el) {
            return mid;
        } else if (ar[mid] < el) {
            l = mid + 1
        } else {
            r = mid - 1;
        }
    }
    return -1;
}

//console.log(countElement([1,2,4,4,4,5,6,7], 4))
console.log(countElement([2, 4, 4, 4, 4, 4, 4, 4, 4, 100], 4))


/*
 * Smallest sub string containing
 * Big string and Small stirng
 * ex: abcdefgh fc
 *
*/